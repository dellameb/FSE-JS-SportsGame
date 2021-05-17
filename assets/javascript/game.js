let team1ShootBtn = document.querySelector("#teamone-shoot-button");
let team2ShootBtn = document.querySelector("#teamtwo-shoot-button");

let team1NumShots = document.querySelector("#teamone-numshots");
let team2NumShots = document.querySelector("#teamtwo-numshots");

let resetBtn = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");

// when the reset button is clicked shot and goal counters reset and reset button incr + 1
resetBtn.addEventListener("click", function(){
  //alert("that worked");

    /* needed to add parseInt to convert string to a number to add */
    let totalResets = parseInt(numResets.innerHTML) + 1;
  
    // update the counter on the screen to have the new value using the innerhtml/innertext for the value
    numResets.innerText = totalResets;
    console.log(totalResets);
})

// when the team 1 button is clicked the counter goes up
team1ShootBtn.addEventListener("click", function(){
  /*alert("that worked"); */

  /* needed to add parseInt to convert string to a number to add */
  let totalTeam1Shots = parseInt(team1NumShots.innerHTML) + 1;
  
  // update the counter on the screen to have the new value using the innerhtml/innertext for the value
  team1NumShots.innerText = totalTeam1Shots;
  console.log(totalTeam1Shots);
  })


// when the team 2 button is clicked the counter goes up
team2ShootBtn.addEventListener("click", function(){

  /* needed to add parseInt to convert string to a number to add */
  let totalTeam2Shots = parseInt(team2NumShots.innerHTML) + 1;
  
  // update the counter on the screen to have the new value using the innerhtml/innertext for the value
  team2NumShots.innerText = totalTeam2Shots;
  console.log(totalTeam2Shots);
  })