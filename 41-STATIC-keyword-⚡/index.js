// static keyword = keyword that define properties or methods that belong to a class, rather then the object created from the class.

class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static gerArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getDiameter(50));
console.log(MathUtil.gerArea(10));


class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} users online`);
    }
}


const user1 = new User ("Saif");
const user2 = new User ("Bo");

console.log(user1.userName);
console.log(user2.userName);

console.log(User.userCount);
console.log(User.getUserCount);
User.getUserCount();