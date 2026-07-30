//note1-->
//Rest operator-->(...variable_name)
//Rest operator binds multiple values and return it in form of array 
//we use this when parameter of function is not fixed or unknown

function calculateCartPrice(...num1){
 return num1;

}
console.log(calculateCartPrice(200,300,400,100,6000));
//when argument is not fixed,then you have to use--->spread variable i.e, (...variable_name)

//PASSING OBJECT TO THE FUNCTION
const myObj={
    name:"punit",
    price:999
};

 function handleObject(anyObject){
    return `my name is ${anyObject.name} and my price is ${anyObject.price}`;
 }
console.log(handleObject(myObj));

//PASSING ARRAY TO THE FUNCTION
let myMarks=[100,99,98,97,96,94];
function handleMarks(anyArray){
    return anyArray;
}
console.log(handleMarks(myMarks));

//note2-->
//you can pass objects,arrays, and any dataStructure in function and you can access
//you can access using--> dot operator or using ---> ["index"],index system
//you can directly define array and object  in argument ,at the time of calling 
