import * as _ from "lodash-es";
import { writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

const range = _.range;

const amountToGenerate = 5;

const players = range(amountToGenerate).map((id) => ({
  id,
  name: faker.internet.userName(),
  level: Math.round(Math.random() * 10 + 1) * 10000,
  souls: Math.round(Math.random() * 10 + 1 * 10),
  email: faker.internet.email(),
  password: faker.internet.password(),
  leftReviewer: false,
}));

const messages = range(amountToGenerate).map((id) => ({
  id,
  contents: faker.lorem.words(5),
}));

const reviews = range(amountToGenerate).map((id) => {
  const player = players[Math.floor(Math.random() * players.length)];
  // @ts-expect-error player is not null
  player.leftReview = true;
  return {
    id,
    playerId: player?.id,
    playerName: player?.name,
    level: player?.level,
    contents: faker.lorem.words(5),
  };
});

const db = {
  players,
  messages,
  reviews,
};

writeFileSync("db.json", JSON.stringify(db), { encoding: "utf-8" });
