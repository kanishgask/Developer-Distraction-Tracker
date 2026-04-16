function calculateScore(distractions){

let score = 100 - (distractions * 10);

if(score < 0){
score = 0;
}

return score;

}
