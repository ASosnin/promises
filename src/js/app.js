import GameSavingLoader from './loader';

GameSavingLoader.load()
  .then((saving) => saving)
  .catch((err) => {
    throw new Error(err);
  });
