//FUNCTION DEFINITION 
function printName(name){
    console.log(`my name is ${name}`);
    
}
//FUNCTION CALLING
printName("punit");
//note1-->
//in java script we dont need to define variable type inside function parameter
//it figures out itself 

//FUNCTION WITH IF-ELSE AND RETURN 
function sumOfNum(num1,num2){
    console.log(typeof(num1));
    console.log(typeof(num2));
    
    return num1+num2;

}

let result=sumOfNum(3,4);
console.log(result);

//note2-->
//function may return true ,unsless it is doing any printing work(not in very case)
//function-->it is the keyword to start the function definition
//Parameter-->At the time of defining function
//argument--> At time of calling functiion
//Functions can have default parameter

