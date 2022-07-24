/**
 * https://leetcode.cn/problems/distance-between-bus-stops/
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
  if (start === destination) {
    return 0;
  }
  if (start > destination) {
    const temp = start;
    start = destination;
    destination = temp;
  }
  // const minStart = Math.min(start, destination);
  // const maxEnd = Math.max(start, destination);
  let total = 0;
  let count = 0;
  for (let i = 0; i < distance.length; i++) {
    total += distance[i];
    if (i >= start && i < destination) {
      count += distance[i];
    }
  }
  console.log('...count: ' + count);
  console.log('...total: ' + total);
  // count = Math.min(count, total - count);
  const temp = total - count;
  if (count > temp) {
    return temp;
  }
  return count;
};

const distance = [1, 2, 3, 4];
const start = 0;
const destination = 3;
const res = distanceBetweenBusStops(distance, start, destination);
console.log('result: ', res);
