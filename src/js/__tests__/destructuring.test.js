import extractSpecialAttacks from '../destructuring';

test('Extract spesial attacks when spesial exist and is an array', () => {
  const character = {
    special: [
      {
        id: 1,
        name: 'Special Attack 1',
        icon: 'icon1.jpg',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Special Attack 2',
        icon: 'icon2.jpg',
      },
    ],
  };

  const specialAttacks = extractSpecialAttacks(character);

  expect(specialAttacks).toEqual([
    {
      id: 1,
      name: 'Special Attack 1',
      icon: 'icon1.jpg',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Special Attack 2',
      icon: 'icon2.jpg',
      description: 'Описание недоступно',
    },
  ]);
});

test('Return an empty array when special is missing or not an array', () => {
  const character1 = { special: undefined };
  const character2 = { special: 'not an array' };

  const specialAttacks1 = extractSpecialAttacks(character1);
  const specialAttacks2 = extractSpecialAttacks(character2);

  expect(specialAttacks1).toEqual([]);
  expect(specialAttacks2).toEqual([]);
});