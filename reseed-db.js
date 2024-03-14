import * as _ from "lodash-es";
import { writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

const range = _.range;

const amountToGenerate = 8;

const randomNameFunction = () => {
  const randomizedName = [
    `${faker.person.lastName()} of ${faker.location.city()}`,
    `${faker.person.firstName()} the ${faker.animal.type()}`,
    `Undead ${faker.word.adjective()} ${faker.person.jobType()}`,
    `The ${faker.location.city()} slayer of ${faker.animal.type()}`,
  ];
  return randomizedName[Math.round(Math.random() * 3)];
};

const randomMessageFunction = () => {
  const randomizedMessages = [
    `Beware of ${faker.word.adjective()} ${faker.animal.type()}`,
    `${faker.word.adjective()} ${faker.word.noun()} up ahead `,
    `Don't ${faker.word.adverb()} ${faker.word.verb()} in this area`,
    `Kill the ${faker.animal.type()} ${faker.person.jobType()}`,
  ];
  return randomizedMessages[Math.round(Math.random() * 3)];
};

const randomReviewFunction = () => {
  const randomizedReviews = [
    `I ${faker.word.adverb()} ${faker.word.verb()} every time i play this game`,
    `This game is ${faker.word.adjective()}`,
    `I am forced to ${faker.word.adverb()} ${faker.word.verb()} to not die`,
  ];
  return randomizedReviews[Math.round(Math.random() * 2)];
};

const players = range(amountToGenerate).map((id) => ({
  id,
  name: randomNameFunction(),
  level: Math.round(Math.random() * 10 + 1) * 10,
  souls: Math.round(Math.random() * 10) * 10000,
  email: faker.internet.email(),
  password: faker.internet.password(),
  leftReview: false,
}));

const messages = range(amountToGenerate).map((id) => ({
  id,
  contents: randomMessageFunction(),
}));

const reviews = range(amountToGenerate).map((id) => {
  const filteredPlayersForReviews = players.filter(
    (playerData) => playerData.leftReview === false,
  );

  const player =
    filteredPlayersForReviews[
      Math.floor(Math.random() * filteredPlayersForReviews.length)
    ];

  // @ts-expected error not null
  player && (player.leftReview = true);

  return {
    id,
    playerName: player?.name,
    level: player?.level,
    contents: randomReviewFunction(),
  };
});

const db = {
  players,
  messages,
  reviews,
};

writeFileSync("db.json", JSON.stringify(db), { encoding: "utf-8" });
