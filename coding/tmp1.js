getRating(4); // print ★★★★☆
getRating(1); // print ★☆☆☆☆

function getRating(goal) {
    var fullStar = "★";
    var emptyStar = "☆";
    var sum = 5;
    var intGoal = Math.ceil(goal);
    var result = fullStar.repeat(intGoal) + emptyStar.repeat(sum-intGoal);
    console.log(result);
}
