let myDate=new Date();
console.log(myDate);
//converting time so to get readable value 
console.log(myDate.toString());

console.log(myDate.toLocaleString());//convert in form of DD/MM/YYYY and give present time also
console.log(myDate.toDateString());//convert only date to string ,no other value
console.log(myDate.toLocaleDateString());//convert only date to string in form of MM/DD/YYYY
console.log(myDate.toJSON());//return this value-->2026-07-22 T13:59:59.879Z

//to create own date
let myCreatedDate=new Date('07-23-2025');
console.log(myCreatedDate);//return same date written in paranthesis
console.log(myCreatedDate.toLocaleDateString());//return proper date in form of DD/MM/YYYY
//to get time of date created in millisecond from 1970(value set by javaScript )
//returns total time in millisecond

console.log(myCreatedDate.getTime());//return value in millisecond
console.log(Math.floor(myCreatedDate.getTime()/1000));//Divide by 1000 and get value in seconds and do MAth.floor ->to get exact value

//some more functions-->
let nextDate=new Date();

console.log(nextDate.getMonth()+1);//return month starting from zero -->so we add 1 to get exact month

//note-->
//we use these functions and create date to get value in millisecond and to compare it with another value 
//use in quiz and many more things




