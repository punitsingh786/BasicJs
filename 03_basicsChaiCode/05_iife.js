//IIFE-->IMMEDIATELY INVOKED FUNCTION EXPRESSION
//(function definition)(function call)

//NAMED IIFE
(function chai(){
    console.log(`welcome to chai aaur code`);
    
})();//no need to call,it will execute by itself 

//UNNAMED IFFE
(()=>{
    console.log(`welcome to chai code 2 `);
    
})();
//IIFE WITH VARIABLE 
((name)=>{
    console.log(`welcome ${name} to chai code`);
    
})('punit');//passed punit at time of calling or executing 
//note1--->
//iffe--> execute immediately  ,no need to call 
//GLOBAL SCOPE KE VARIABLE SE POLLUTION HOTI H ,SO GLOBAL SCOPE KE POLLUTION KO HATANE KE LIYE IIFE  LIKHTE H 
//YOU HAVE TO WRITE SEMI-COLON(;),TO END OR STOP IFFE
//BEACAUSE  YOU CANT WRITE SECOND IFFE ,WITHOUT ENDING FIRST IFFE


