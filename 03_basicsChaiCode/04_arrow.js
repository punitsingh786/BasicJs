//note1-->
//this -->keyword talk about current context ,means current me jo variable hai uski baat karta h,parent object
//Global object in browser=Window object
//In Node -->this refers to Empty object 
//JS me function likhte time (function -->keyword ),likhte h 

//++++++++++++
//YOU CANT ACCESS VARIABLE THOUGH THIS->keyword, IN THIS TYPE OF FUNCTION DEFINITION
//this return global object in this type of function definition
function printValue(){
    let userName="punit";
    let price=999;
    let window=function(){
        console.log(`${this.userName} welcome to window for ${this.price}`);
        
    }
    window();
    // console.log(this);
    
    
}
printValue();

//++++++++++
//YOU CANNOT ACCESS VARIABLE THROUGH THIS KEYWORD-->IN ARRAW FUNCTION ALSO 
//THIS RETURN EMPTY OBJECT IN ARROW FUNCTION
const chai=()=>{
    let username="punit";
    let mentor="hitesh choudhary";
    console.log(this.username);
    console.log(this.mentor);
    console.log(this);
    
    
}
chai();
//ARROW FUNCTION
const addTwo=(num1,num2)=>{
        return num1+num2;
}
console.log(addTwo(1,2));

//OR,IMPLICIT RETURN 
const addThree=(num1,num2,num3)=>(num1+num2+num3);
console.log(addThree(1,2,3));


//note2-->
//explicit return-->use curly braces{}--> have to write return keyword 
//implicit return-->use parenthesis() --> not write return keyword

//IN THIS VIDEO WE LEARN ABOUT THIS KEYWORD AND ARROW FUNCTION.





