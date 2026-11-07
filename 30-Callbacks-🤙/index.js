hello(goodbye);
// goodbye();


function hello(callback){
    setTimeout(() => {
        console.log("Hello!");
        callback();
    }, 3000);
}

function goodbye(){
    console.log("Good bye!");
}



hello(leave);

function leave(){
    console.log("Leave!");
}