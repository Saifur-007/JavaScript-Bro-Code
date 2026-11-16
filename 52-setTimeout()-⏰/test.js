let timeOut;

function startTimer(){
    timeOut = setTimeout(() => {
                            console.log("STARTED");
                        }, 6000);
}

function clearTime(){
    clearTimeout(timeOut);
    console.log("CLEARED");
}