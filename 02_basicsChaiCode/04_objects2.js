//const tinderUser=new object();singleton object
const tinderUser={};//non -singleton object 
tinderUser.id="123abc";
tinderUser.name="punit";
tinderUser.myObj={
    match:10,
    views:1000,
    gender:"male",
};

console.log(tinderUser);
//NESTING OF OBJECTS
let myObj1={
    myObj2:{
        myObj3:{
            "full name":"punit singh",
            age:22,
            email:"punit@gmail.com"
        }
    }
}
//Accessing all objects
console.log(myObj1);
console.log(myObj1.myObj2);
console.log(myObj1.myObj2.myObj3);
console.log(myObj1.myObj2.myObj3["full name"]);
//MERGE TWO or more  OBJECTS
const myObj4={
            "full name":"punit singh",
            age:22,
            email:"punit@gmail.com"
        };
const obj3={...tinderUser,...myObj4};
console.log(obj3);
//note-->1
//Nesting of object is possible,
//to merge two or more arrays-->use spread function(...obj1,...obj2,...obj3,...)
//jisko merger karna -->uske type ke bracket me hi spread function use krenge 
//eg--Array[...spread],object{...spread}

//OBJECTTS INSIDE ARRAY
const arr=[
    obj1={
        1:"a",
        2:"b"
    },
    obj2={
        3:"c",
        4:"d"
    },
    obj4={
        5:"e",
        6:"f"
    }
];

console.log(arr[0]["1"]);
console.log(arr[2]["5"]);

//METHODS
console.log(Object.keys(tinderUser));//return all keys in form of array
console.log(Object.values(tinderUser));//reeturn all values in form of array
console.log(Object.entries(tinderUser));//return all [key,value] pairs in large array
//note2-->
//object.keys()-->total key ko array ki form me return karta h 
//object.values()-->total values ko array ki form me return karta h 
//object.entries()-->total key value ke pair ko return karta h in form of array








