let distractions = 0;

document.addEventListener("visibilitychange", () => {

if(document.hidden){

distractions++;

updateDisplay();

}

});

function updateDisplay(){

document.getElementById("count").innerText = distractions;

document.getElementById("score")
.innerText = calculateScore(distractions);

}

function resetTracker(){

distractions = 0;

updateDisplay();

}
