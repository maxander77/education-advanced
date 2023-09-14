function extractSpecialAttacks({ special }) {
  if (!special || !Array.isArray(special)) {
    return [];
  }

  return special.map((attack) => {
    const { id, name, icon, description = 'Описание недоступно' } = attack;
    return { id, name, icon, description };
  });
}


 const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]	
}

const specialAttacks = extractSpecialAttacks(character);
console.log(specialAttacks);

export default extractSpecialAttacks;