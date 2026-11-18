function func1(callback){
    setTimeout (() => {console.log("Task 01");
                         callback()}, 3000);
}

function func2(){
    console.log("Task 02");
    console.log("Task 03");
    console.log("Task 04");
}

func1(func2);