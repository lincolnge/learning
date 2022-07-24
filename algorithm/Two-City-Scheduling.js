/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  const newArray = [{
    arr: costs[0],
    diffValue: costs[0][0] - costs[0][1],
  }];
  for (let i = 1; i < costs.length; i++) {
    const item = costs[i];
    const diffValue = item[0] - item[1];
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j].diffValue > diffValue) {
        newArray.splice(j, 0, {
          arr: item,
          diffValue,
        });
        break;
      }
      if (j === newArray.length - 1) {
        newArray.push({
          arr: item,
          diffValue,
        });
        break;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (i < (newArray.length - 1) / 2) {
      result += newArray[i].arr[0];
    } else {
      result += newArray[i].arr[1];
    }
  }
  return result;
};

const costs = [[10, 20], [30, 200], [400, 50], [30, 20]];
const costs1 = [[10, 20], [30, 200], [400, 50], [30, 30]];
const costs2 = [[10, 20], [30, 200], [400, 50], [30, 30], [30, 20]];
console.log('twoCitySchedCost', twoCitySchedCost(costs));
console.log('twoCitySchedCost 1', twoCitySchedCost(costs1));
