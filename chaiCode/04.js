//note-->
//1.primitive datatypes
//7 types->String,Number,Boolean,null,undefined,Symbol,BigInt
const name="punit";
let age=22;
let isPlaced=false;
let salary=null;
let bankBalance=undefined;

//symbol reterns different value each time 
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//return false

//note-->
//2.Reference(Non-Primitive)
//3 types-->Array,Object,Function
const heroes=["shaktiman","nagraj","doga"];//array
//object={key:value}
const myObj={
    name:"punit",
    age:"22",
};
//function
const myFunc=function(){
    console.log("hello world");
    
}
//note-->in function --function keyword is important
//note-->
// to know type of any variable we use typeof() function

console.log(typeof(age));

