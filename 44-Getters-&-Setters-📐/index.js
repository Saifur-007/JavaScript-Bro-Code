class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error("The width need to be positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._hight = newHeight;
        }else{
            console.error("The hight need to be positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._hight;
    }

    get area(){
        return `${(this._width * this._hight).toFixed(1)} cm²`;
    }
}



const rectangle = new Rectangle(100, 100);



console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);


console.log(rectangle.area);