import GameSavingLoader from '../loader';

test('Проверка загрузки сохранения', () => {
  const gameSaving = GameSavingLoader.load()
    .then((saving) => saving)
    .catch((err) => {
      throw new Error(err);
    });

  return expect(Promise.resolve(gameSaving)).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
