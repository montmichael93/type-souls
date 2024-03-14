import { Requests } from "none/utils/requests";
import {
  type BossData,
  type ActiveComponent,
  type playerMessages,
  type playerReviews,
  type GamePlayers,
} from "none/utils/types";
import { bossData } from "public/bosses-data";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import { useAuth } from "./Authprovider";
import { usePlayer } from "none/utils/UsePlayer";
import { type Sampler, type Player } from "tone";
import { UseSampler } from "none/utils/UseSampler";
import * as ls from "local-storage";
import { set } from "local-storage";

type TGameProvider = {
  player: Player | null;
  sampler: Sampler | null;
  bossData: BossData[];
  activeComponent: ActiveComponent;
  playerMessages: playerMessages[];
  playerReviews: playerReviews[];
  selectedBoss: number | null;
  setSelectedBoss: Dispatch<SetStateAction<number | null>>;
  setActiveComponent: Dispatch<SetStateAction<ActiveComponent>>;
  setPlayerMessages: Dispatch<SetStateAction<playerMessages[]>>;
  setPlayerReviews: Dispatch<SetStateAction<playerReviews[]>>;
  retrievePlayerMessages: () => Promise<playerMessages[]>;
  postNewMessage: (newMessage: Omit<playerMessages, "id">) => Promise<void>;
  postNewReview: (newReview: Omit<playerReviews, "id">) => Promise<void>;
  patchPlayerReview: (playerId: number) => Promise<void>;
  retrievePlayerReviews: () => Promise<playerReviews[]>;
  patchPlayerDead: (playerId: number) => Promise<void>;
  patchPlayerSurvived: (
    playerProfile: GamePlayers,
    levelUpBy: number,
    soulsEarned: number,
  ) => Promise<void>;
};

const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const player = usePlayer();
  const sampler = UseSampler();
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("loading");

  const [playerMessages, setPlayerMessages] = useState<playerMessages[]>([]);
  const { allPlayers, setPlayerInfo, playerInfo, setAllPlayers } = useAuth();
  const [playerReviews, setPlayerReviews] = useState<playerReviews[]>([]);
  const [selectedBoss, setSelectedBoss] = useState<number | null>(null);

  useEffect(() => {
    Requests.getAllMessages()
      .then(setPlayerMessages)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Requests.getAllReviews()
      .then(setPlayerReviews)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const playerStorage = ls.get("playerThatIsLoggedIn");
    const determineStorage = playerStorage ? "main-menu" : "landing-page";
    setActiveComponent(determineStorage);
  }, []);

  const retrievePlayerMessages = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const messageData: playerMessages[] = await Requests.getAllMessages();
      return Promise.resolve(messageData);
    } catch (error) {
      alert(error);
      return Promise.reject(error);
    }
  };

  const postNewMessage = async (newMessage: Omit<playerMessages, "id">) => {
    const maxId = playerMessages.map((message) => message.id).slice(-1)[0];
    console.log(maxId);
    const newPlayerMessage: playerMessages = {
      id: maxId! + 1,
      ...newMessage,
    };
    console.log(newPlayerMessage.id);
    const addTheNewMessage = [...playerMessages, newPlayerMessage];
    await Requests.postNewMessage(newMessage)
      .then(() => {
        setPlayerMessages(addTheNewMessage);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const retrievePlayerReviews = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const reviewData: playerReviews[] = await Requests.getAllReviews();
      return Promise.resolve(reviewData);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const postNewReview = async (newReview: Omit<playerReviews, "id">) => {
    const maxId = playerReviews.map((review) => review.id).slice(-1)[0];
    const newPlayerReview: playerReviews = {
      id: maxId! + 1,
      ...newReview,
    };
    const addTheNewReview = [...playerReviews, newPlayerReview];
    await Requests.postNewReview(newReview)
      .then(() => {
        setPlayerReviews(addTheNewReview);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const patchPlayerReview = async (playerId: number) => {
    setAllPlayers((allPlayers: GamePlayers[]) =>
      allPlayers.map((player) =>
        player.id === playerId ? { ...player, leftReview: true } : player,
      ),
    );
    setPlayerInfo(playerInfo && { ...playerInfo, leftReview: true });

    await Requests.patchPlayerReview(playerId)
      .then((response) => {
        playerInfo &&
          set<GamePlayers>("playerThatIsLoggedIn", {
            ...playerInfo,
            leftReview: true,
          });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!response.ok) {
          setAllPlayers(allPlayers);
          //playerInfo &&
          //set<GamePlayers>("playerThatIsLoggedIn", {
          //...playerInfo,
          //leftReview: false,
          //});
          alert(response);
        } else return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const patchPlayerDead = async (playerId: number) => {
    setAllPlayers((allPlayers) =>
      allPlayers.map((player) =>
        player.id === playerId ? { ...player, souls: 0 } : player,
      ),
    );
    setPlayerInfo((playerInfo) => playerInfo && { ...playerInfo, souls: 0 });
    await Requests.patchPlayerDead(playerId)
      .then((response) => {
        playerInfo &&
          set<GamePlayers>("playerThatIsLoggedIn", { ...playerInfo, souls: 0 });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!response.ok) {
          setAllPlayers(allPlayers);
          //playerInfo && set<GamePlayers>("playerThatIsLoggedIn", playerInfo);
          // playerInfo &&
          // set<GamePlayers>("playerThatIsLoggedIn", {
          // ...playerInfo,
          //souls: playerInfo.souls,
          //});
        } else return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const patchPlayerSurvived = async (
    playerProfile: GamePlayers,
    levelUpBy: number,
    soulsEarned: number,
  ) => {
    setAllPlayers((allPlayers) =>
      allPlayers.map((player) =>
        player.id === playerProfile.id
          ? {
              ...player,
              souls: player && player?.souls + soulsEarned,
              level: player && player?.level + levelUpBy,
            }
          : player,
      ),
    );
    setPlayerInfo(
      (playerInfo) =>
        playerInfo && {
          ...playerInfo,
          souls: playerInfo && playerInfo?.souls + soulsEarned,
          level: playerInfo && playerInfo?.level + levelUpBy,
        },
    );
    await Requests.patchPlayerSurvived(playerProfile, levelUpBy, soulsEarned)
      .then((response) => {
        playerInfo &&
          set<GamePlayers>("playerThatIsLoggedIn", {
            ...playerInfo,
            level: playerInfo.level + levelUpBy,
            souls: playerInfo.souls + soulsEarned,
          });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!response.ok) {
          setAllPlayers(allPlayers);
          //playerInfo &&
          //set<GamePlayers>("playerThatIsLoggedIn", {
          //...playerInfo,
          //level: playerInfo.level,
          //souls: playerInfo.souls,
          // });
        } else return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GameContext.Provider
      value={{
        player,
        sampler,
        bossData,
        activeComponent,
        playerMessages,
        playerReviews,
        selectedBoss,
        setSelectedBoss,
        setPlayerMessages,
        setActiveComponent,
        setPlayerReviews,
        retrievePlayerMessages,
        postNewMessage,
        postNewReview,
        patchPlayerReview,
        retrievePlayerReviews,
        patchPlayerDead,
        patchPlayerSurvived,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
