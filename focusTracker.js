function trackFocus(callback){

document.addEventListener("visibilitychange", () => {

if(document.hidden){

callback();

}

});

}
