function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Good bye!");
}

hello(goodbye);