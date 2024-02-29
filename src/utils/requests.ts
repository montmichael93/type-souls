import { type Player } from "./types";

interface PlayerCredentials {
  email: string;
  password: string;
}

export const baseUrl = "http://localhost:3000";

const getAllPlayers = () => {
  return fetch(`${baseUrl}/players}`).then((response) => response.json());
};

const findPlayer = async () => {
  return fetch(`${baseUrl}/players/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    const data = response.json();
    return data;
  });
};

const postNewPlayer = (player: Omit<Player, "id">) => {
  return fetch(`${baseUrl}/players/`, {
    body: JSON.stringify(player),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const Requests = {
  getAllPlayers,
  postNewPlayer,
  findPlayer,
};
