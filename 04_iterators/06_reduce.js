const myNum=[1,2,3,4,5,6,7,8,9,10];
const initialValue=0;
const sumTotal=myNum.reduce((acc,currValue)=>{
    return acc+currValue;

},initialValue);
console.log(sumTotal);

//note1-->
//.reduce me pahle --->initial value pass karte h;
//initial value ACCUMULATOR ME CHALA JATA H 
//ACCUMULATOR KA NEXT VALUE = SUM OF ACCUMULATOR + CURRENT VALUE 
//CURRENT VALUE= ITEMS OF ARRAY ,ON THE BASIS OF ITERATION
//ACCUMULATOR KA INITIAL VALUE PASS KARNA PADTA H 

//some more on reduce 
const library=[
    {
        bookName:"gunda",
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

const sumOfBooks=library.reduce((acc,item)=>{
    return acc+item.price;
},0);
console.log(sumOfBooks);


//in shopping cart problem you can use .reduce()
//reduce ke bhitar bhi callback likhte h 
//accumular ko initialize karte h,BUT USKA NEXT VALUE = ACC+ITEM;

