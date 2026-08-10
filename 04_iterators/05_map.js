const myNum=[1,2,3,4,5,6,7,8,9,10];
const newNum=myNum.map((num)=>{
    return num*10;
})
// console.log(newNum);


//note1-->
//map is also an iterator
//map will iterate on every element --->do the work that is assigned
//no condition needed to iterate and do work --->not like .filter

//CHAINING 
const newChain=myNum.map((num)=>{
    return num*20;
})
.map((num)=>{
    return num+2;
})

console.log(newChain);

//note2-->
//CHAINING KA RESULT SECOND CHAIN ME PASS HO JATA H 
//FILTER ME TRUE AND FALSE WALA GAME H ,
//MAP ME SABHI RETURN HOTA H 
