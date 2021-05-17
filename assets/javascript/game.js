let team1ShootBtn = document.querySelector("#teamone-shoot-button");
let team2ShootBtn = document.querySelector("#teamtwo-shoot-button");

let team1NumShots = document.querySelector("#teamone-numshots");
let team2NumShots = document.querySelector("#teamtwo-numshots");

let team1NumGoals = document.querySelector("#teamone-numgoals");
let team2NumGoals = document.querySelector("#teamtwo-numgoals");

let resetBtn = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) );
};

function winner(){
  if (team1NumGoals.innerText > team2NumGoals.innerText) {
  return "Team 1 Wins!"}
  else if (team2NumGoals.innerText > team1NumGoals.innerText) {
  return "Team 2 Wins!"}
  else {
  return "It's a tie!"}
};

// when the team 1 button is clicked the counter goes up
team1ShootBtn.addEventListener("click", function(){
    if (getRndInteger(0,2) == 0) {
      let totalTeam1NumGoals = parseInt(team1NumGoals.innerHTML) + 1;
      team1NumGoals.innerText = totalTeam1NumGoals;
      console.log(totalTeam1NumGoals);
    }

  /*alert("that worked"); */

  /* needed to add parseInt to convert string to a number to add */
  let totalTeam1Shots = parseInt(team1NumShots.innerHTML) + 1;
  
  // update the counter on the screen to have the new value using the innerhtml/innertext for the value
  team1NumShots.innerText = totalTeam1Shots;
  console.log(totalTeam1Shots);
  })




// when the team 2 button is clicked the counter goes up
team2ShootBtn.addEventListener("click", function(){

  if (getRndInteger(0,2) == 0) {
    let totalTeam2NumGoals = parseInt(team2NumGoals.innerHTML) + 1;
    team2NumGoals.innerText = totalTeam2NumGoals;
    console.log(totalTeam2NumGoals);
  }
  /* needed to add parseInt to convert string to a number to add */
  let totalTeam2Shots = parseInt(team2NumShots.innerHTML) + 1;
  
  // update the counter on the screen to have the new value using the innerhtml/innertext for the value
  team2NumShots.innerText = totalTeam2Shots;
  console.log(totalTeam2Shots);
  })


  // when the reset button is clicked shot and goal counters reset and reset button incr + 1
resetBtn.addEventListener("click", function(){

  //alert("that worked");
    //display who won
    alert(winner());
    /* needed to add parseInt to convert string to a number to add */
    let totalResets = parseInt(numResets.innerHTML) + 1;
  
    // update the counter on the screen to have the new value using the innerhtml/innertext for the value
    numResets.innerText = totalResets;
    console.log(totalResets);
    //need to reset counters for other variables
    team1NumShots.innerText = 0;
    team2NumShots.innerText = 0;
    team1NumGoals.innerText = 0;
    team2NumGoals.innerText = 0;

})