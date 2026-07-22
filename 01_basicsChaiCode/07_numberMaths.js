const balance=new Number(100);
console.log(balance);
//conversion
console.log(balance.toString());    //convert to string
console.log(balance.toFixed(2));   //fixed to precision value i.e, output  100.00 & if 3 or 1 #output=100.000 &100.0 (RoundOf)


let number=1000000;
//gives coma i.e,seperate by coma (default value is us system)--.('en-IN)-->makes indian #use locale(toLocaleString)
console.log(number.toLocaleString('en-IN')); 

//note-->if we write or convert number like above 1st line then we can use many inbult functions 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//MATH
//1 Roundof
console.log(Math.round(4.3));//round of and give 4 
console.log(Math.round(4.8));//round of value 
//2 ceil and floor 
console.log(Math.ceil(4.2));//ceiling means upar roof i.e,5
console.log(Math.floor(4.9));// returns floor value matlab niche wala dega i.e,4

//3 Random
console.log(Math.random());//return value from 0 to 1 
console.log(Math.random()*10);//retun value from 0 to 10
console.log(Math.random()*10+1);//remove 0 and return value from 1 to 10 (10 excluded)
//FORMULA FOR MATH.RANDOM
let min=10;
let max=20;
let formula=Math.floor((Math.random()*(max-min+1)+min));
//Math.random()*(max-min+1)-->return value from 1 to max and 
//Math.random()*(max-min+1) +min--->return value from min to max 
//Math.floor(Math.random()*(max-min+1)+max)--->return single value i.e,floor value

//note -->Math.random() is important and using Math.floor() gives the floor value 
//always use math--->not maths;
//(math.random()*(max-min+1))+min-->gives the value from min to max 
//'+1' likhte h taki 0 na aye 0 se upar aaye i.e, 1 









