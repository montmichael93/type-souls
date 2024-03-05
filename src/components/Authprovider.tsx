import { Requests } from "none/utils/requests";
import { type Player } from "none/utils/types";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import toast from "react-hot-toast/headless";

interface PlayerCredentials {
  email: string;
  password: string;
}

type TAuthProvider = {
  allPlayers: Player[];
  playerInfo: Player | null;
  setPlayerInfo: Dispatch<SetStateAction<Player | null>>;
  setAllPlayers: Dispatch<SetStateAction<Player[]>>;
  postNewPlayer: (player: Omit<Player, "id">) => Promise<void>;
  logInAttempt: (credentials: PlayerCredentials) => Promise<void[]>;
};

const AuthContext = createContext<TAuthProvider>({} as TAuthProvider);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [playerInfo, setPlayerInfo] = useState<Player | null>(null);

  useEffect(() => {
    Requests.getAllPlayers()
      .then(setAllPlayers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postNewPlayer = async (player: Omit<Player, "id">) => {
    const maxId = allPlayers.map((player) => player.id).slice(-1)[0];
    const newPlayer: Player = {
      id: maxId! + 1,
      ...player,
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const playerData: Player[] = await Requests.findPlayer();
    const doubleSignUpChecker =
      playerData.filter(
        (stored: Player) =>
          stored.name === player.name || stored.email === player.email,
      ).length === 0;

    if (doubleSignUpChecker) {
      const addTheNewPlayer = [...allPlayers, newPlayer];
      await Requests.postNewPlayer(player)
        .then(() => {
          setAllPlayers(addTheNewPlayer);
        })
        .then(() => {
          toast.success("New player added!");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      const errorMessage = "username or email is already registered";
      alert(new Error(errorMessage));
      return Promise.reject(errorMessage);
    }
  };

  const storePlayerInfo = (playerObject: Player) => {
    const infoToStore = JSON.stringify(playerObject);
    localStorage.setItem("playerThatIsLoggedIn", infoToStore);
  };

  const logInAttempt = async (credentials: PlayerCredentials) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const playerData: Player[] = await Requests.findPlayer();
      const playersFound = playerData.filter(
        (player: Player) =>
          player.email === credentials.email &&
          player.password === credentials.password,
      );
      if (playersFound.length === 0) {
        throw Error("Email or password is incorrect");
      }

      const resolveAll = [
        storePlayerInfo(playersFound[0]!),
        setPlayerInfo(playersFound[0]!),
        setAllPlayers(playerData),
      ];

      return Promise.resolve(resolveAll);
    } catch (error) {
      alert(error);
      return Promise.reject(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        allPlayers,
        playerInfo,
        setPlayerInfo,
        setAllPlayers,
        postNewPlayer,
        logInAttempt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
