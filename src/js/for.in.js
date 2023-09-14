function orderByProps(obj, order) {
  const result = [];
  const sortedProps = [];

  for (const key of order) {
    if (key in obj) {
      sortedProps.push(key);
      result.push({ key, value: obj[key] });
    }
  }

  for (const key in obj) {
    if (!sortedProps.includes(key)) {
      result.push({ key, value: obj[key] });
    }
  }

  return result; 
}

const obj = {
  name: 'мечник', 
  health: 10, 
  level: 2, 
  attack: 80, 
  defence: 40
};

const order = ["name", "level"];
const sortedProps = orderByProps(obj, order);

console.log(sortedProps);

export default orderByProps;