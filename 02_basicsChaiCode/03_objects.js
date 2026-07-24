//defing a symbol to use in object 
let mySym=Symbol('key1');
//defining an object
const myObj={
    name:"punit",
    age:23,
    location:"delhi",
    email:"punit@gmail.com",
    isMarried:false,
    "full name":"punit singh",
    [mySym]:"my key1"

};
//ACCESS
console.log(myObj.email);//using dot 
console.log(myObj["email"]);//using index type ,always write, inside  inverted coma like (string)


console.log(myObj["full name"]);//cant access this through dot ,beacause-->variable has space in it i.e,(FULL<SPACE>NAME)

//ACCESS SYMBOL
console.log(myObj[mySym]);//there is only one way to define and access symbol in object
//note1--->
//you can access objects using dot(.) and using like index["invertedComa"],
//you cannot access variable which has space in it through dot--->you have to use index system 
//Symbol is a special case may be asked in interviews


//ADDING FUNCTION IN OBJECT USING KEY VALUE PAIR 
myObj.greeting=function(){
    console.log("hello js user");
    
};

console.log(myObj.greeting());//using () at last -->beacause its a function
console.log(myObj);//printing object
//ADDING KEY INSIDE FUNCTION OF OBJECT
myObj.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(myObj.greetingTwo());

//FREZING OBJECT
Object.freeze(myObj);//you cannot access and change element after freezung is done

//NOTE-->Y0U HAVE TO DEFREEZE THE OBJECT BEFORE ADDING OR ACCESSING ANY THING-->i.e,comment it out

//NOTE2-->this keyword is used to access parent object or parent anything
//always use ()-->parenthesis ,when you are accessingm a function






