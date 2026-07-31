if(true){
    let a=10;
    const b=20;
    var c=30;

}
// console.log(a);  
// console.log(b);
console.log(c);
//note1-->
//let and const have local scope but -->var have global scope
//var can be accesed anywhere

//++++++++++++++
function one(){
    const userName="punit";
    function two(){
        const website=" youtube";
        console.log(userName+website);
        
    }
    // console.log(website);
    two();//calling inner function
    
    
}
one();//calling outer function

//note2-->
//CHILD SCOPE-->parent scope ko Access kar sakta h, BUT parent Scope child scope ko access nhi kar sakta h 
//CHOTA BADE KI ICECREAM KHA SAKTA H BUT BADA CHOTE KI NAHI KHA SAKTA 

//+++++++++INTERESTING+++++++++++
console.log(addOne(5));

function addOne(num){
    return num+1;
}
//Above code works but Below code doesnt 
// console.log(addTwo(5));  //we are not printing this beacause it wont work

const addTwo=function(num){
    return num+2;
}
//note3-->

//Below code cant work beacause of different definition of functions -->function can be defined by multiple ways 
//THIS IS THE CONCEPT OF HOISTING ,WE WILL READ SHORTY ABOUT IT 

//VARIABLES ARE VERY POWERFUL IN JS THE CAN HOLD OR STORE ANYTHING 
//LIKE-->JSON VALUES,FUNCTIONS,OBJECTS ETC 



