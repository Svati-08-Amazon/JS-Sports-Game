let teamOnenumShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals");
let teamTwonumShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");

let oneNumShot = 0,
  twoNumShot = 0,
  oneNumGoal = 0,
  twoNumGoal = 0,
  chance = 60;

let teamOneButton = document.querySelector("#teamone-shoot-button");
teamOneButton.addEventListener("click", function () {
  oneNumShot += 1;
  teamOnenumShots.innerHTML = oneNumShot;
  let radNum = Math.floor(Math.random() * 101);
  if (radNum > chance) {
    oneNumGoal += 1;
    teamOneGoals.innerHTML = oneNumGoal;
  }
});

let teamTwoButton = document.querySelector("#teamtwo-shoot-button");
teamTwoButton.addEventListener("click", function () {
  twoNumShot += 1;
  teamTwonumShots.innerHTML = twoNumShot;
  let radNum = Math.floor(Math.random() * 101);
  if (radNum > chance) {
    twoNumGoal += 1;
    teamTwoGoals.innerHTML = twoNumGoal;
  }
});

let reset = 0;
let resetNum = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  teamOneGoals.innerHTML = 0;
  teamOnenumShots.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
  teamTwonumShots.innerHTML = 0;
  reset += 1;
  resetNum.innerHTML = reset;
  location.reload();
});
