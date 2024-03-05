import { type playerMessages, type Player, type playerReviews } from "./types";

export const baseUrl = "http://localhost:3000";

const getAllPlayers = () => {
  return fetch(`${baseUrl}/players`).then((response) => response.json());
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

const getAllMessages = () => {
  return fetch(`${baseUrl}/messages`).then((response) => response.json());
};

const postNewMessage = (message: Omit<playerMessages, "id">) => {
  return fetch(`${baseUrl}/messages`, {
    body: JSON.stringify(message),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const getAllReviews = () => {
  return fetch(`${baseUrl}/reviews`).then((response) => response.json());
};

const postNewReview = (review: Omit<playerReviews, "id">) => {
  return fetch(`${baseUrl}/reviews`, {
    body: JSON.stringify(review),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const patchPlayerReview = (playerId: string) => {
  return fetch(`${baseUrl}/players/${playerId}`, {
    body: JSON.stringify({ leftReview: true }),
    method: "PATCH",
    headers: { "content-type": "application/json" },
  }).then((response) => response.json());
};

const patchPlayerDead = (playerId: string) => {
  return fetch(`${baseUrl}/players/${playerId}`, {
    body: JSON.stringify({ souls: 0 }),
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

const patchPlayerSurvived = (
  player: Player,
  levelUp: number,
  soulsGained: number,
) => {
  const playerNewLevel = player.level + levelUp;
  const playerNewSoulsAmount = player.souls + soulsGained;
  return fetch(`${baseUrl}/players/${player.id}`, {
    body: JSON.stringify({
      level: playerNewLevel,
      souls: playerNewSoulsAmount,
    }),
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const Requests = {
  getAllPlayers,
  postNewPlayer,
  findPlayer,
  getAllMessages,
  postNewMessage,
  getAllReviews,
  postNewReview,
  patchPlayerReview,
  patchPlayerDead,
  patchPlayerSurvived,
};
