function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Good bye!");
}

hello(goodbye);


hello(leave);

function leave(){
    console.log("Leave!");
}