const myNum=[1,2,3,4,5,6,7,8,8,10];
const newNum=myNum.filter((num)=>{
    return num>4;
})
console.log(newNum);

//note1-->
//.filter(callback_function)-->return karega ,only if condition is true ;
//.filter()-->it is an iterator and iterate on every element of array 
//callback_function--->function without name

//DETAIL AROUT ARRAY FUNCTION
//()=>()-->if you write array function like this ,then you dont have to write RETURN KEYWORD
//()=>{}--->in this type-->NO NEED TO WRITE RETURN KEYWORD

const library=[
    {
        bokkName:"gunda",
        price:200,
        poetName:"jai shankar prashad",
        litrature:"hindi"
    },
    {
        bookName:"usne kaha tha ",
        price:300,
        poetName:"chandradhar sharma guleri ",
        litrature:"hindi"

    },
    {
        bookName:"kafan",
        price:400,
        poetName:"munsi premchand",
        litrature:"hindi"
    },
    {
        bookName:"half girlfriend",
        price:500,
        poetName:"chetan bhagat",
        litrature:"english"
    },
    {
        bookName:"india after gandhi",
        price:600,
        poetName:"ramchandra guha",
        litrature:"english"

    },
    {
        bookName:"kai chand the sare aasma ",
        price:700,
        poetName:"shamshu rahman faruki",
        litrature:"hindi"
    }

];
const selectedBooks=library.filter((item)=>{
    return item.price>300 && item.litrature==="hindi";
})
console.log(selectedBooks);


//NOTE2-->
//.filter()-->wahi return krega jisme condition true aayegi;




