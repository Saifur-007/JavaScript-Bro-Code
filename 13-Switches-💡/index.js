// Switch = can be an efficient replacement to many else if statements.

let day = 7;

switch(day){
    case 1:
        console.log(`Today is Monday.`);
        break;
    case 2:
        console.log(`Today is Tuesday.`);
        break;
    case 3:
        console.log(`Today is Wednesday.`);
        break;    
    case 4:
        console.log(`Today is Thursday.`);
        break;
    case 5:
        console.log(`Today is Friday.`);
        break;
    case 6:
        console.log(`Today is Saturday.`);
        break;
    case 7:
        console.log(`Today is Sunday.`);
        break;
    default:
        console.log(`${day} is not a number!`);
}


let testResult = 30;
let testGrade;

switch(true){
    case testResult >= 90:
        testGrade = "A**";
        console.log(`You Got ${testGrade}`);
        break;
    case testGrade >= 80:
        testGrade = "A*";
        console.log(`You Got ${testGrade}`);
        break;
    case testGrade >= 70:
        testGrade = "A";
        console.log(`You Got ${testGrade}`);
        break;
    case testGrade >= 60:
        testGrade = "B";
        console.log(`You Got ${testGrade}`);
        break;
    case testGrade >= 50:
        testGrade = "C";
        console.log(`You Got ${testGrade}`);
        break;
    case testGrade >= 40:
        testGrade = "C-";
        console.log(`You Got ${testGrade}`);
        break;
    default:
        console.log(`You failed! Niceeee!`);
}