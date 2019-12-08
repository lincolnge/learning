/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    var newArray = [{
        arr: costs[0],
        diffValue: costs[0][0] - costs[0][1]
    }];
    for (var i = 1; i < costs.length; i++) {
        var item = costs[i];
        var diffValue = item[0] - item[1];
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j].diffValue > diffValue) {
                newArray.splice(j, 0, {
                    arr: item,
                    diffValue: diffValue
                });
                break;
            }
            if (j === newArray.length - 1) {
                newArray.push({
                    arr: item,
                    diffValue: diffValue
                });
                break;
            }
        }
    }
    var result = 0;
    for (i = 0; i < newArray.length; i++) {
        if (i < (newArray.length - 1) / 2) {
            result += newArray[i].arr[0];
        } else {
            result += newArray[i].arr[1];
        }
    }
    return result;
};

var costs = [[10,20],[30,200],[400,50],[30,20]];
var costs1 = [[10,20],[30,200],[400,50],[30,30]];
var costs1 = [[10,20],[30,200],[400,50],[30,30], [30, 20]];
console.log('twoCitySchedCost', twoCitySchedCost(costs))
console.log('twoCitySchedCost 1', twoCitySchedCost(costs1))