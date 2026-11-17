import {pi, getCircumference, getArea} from './demo.js';

console.log(pi);

const circumFerence = getCircumference(10);
const area = getArea(10);


console.log(`${circumFerence.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);