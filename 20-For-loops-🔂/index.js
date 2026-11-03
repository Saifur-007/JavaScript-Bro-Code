for(let i = 1; i <= 10; i += 2){
    console.log( i + " Hello");
};


for(let i = 10; i >= 0; i--){
    
    console.log(i);
    
    if(i == 0){
        console.log("Happy New Year.");
    }
}

// Continue

for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }else{
        console.log(i);
    }
}

// Break

for(let i = 2; i < 20; i++){
    
    if(i == 13){
        break;
    }
    console.log(i + " Hello");
}