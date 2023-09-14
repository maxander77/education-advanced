import orderByProps from '../for.in';

test('should order properties by order and then alphabetically', () => {
  const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
  };

  const order = ["name", "level"];

  const sortedProps = orderByProps(obj, order);

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];

  expect(sortedProps).toEqual(expected);
});