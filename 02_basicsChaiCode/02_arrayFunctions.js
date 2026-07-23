const marvelHeroes=['iron man','thor','hulk'];
const dcHeroes=['batman','superman','flash'];
marvelHeroes.push(dcHeroes);  // add to the end,array inside array
console.log(marvelHeroes);
marvelHeroes.pop();
//concat function
const allHeroes=marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
//note1-->
//push--> existing array pe  last me push karta h 
//concat -->2 Arrays ko merge karke ,new Array return karta h 

const newHeroes=[...marvelHeroes,...dcHeroes];//spread sab array element ko alag--aleg kar dega 
console.log(newHeroes);

const arr2=[1,2,3,4,[5,6,7,8],9,[10,11,[12,13,14,15]]];//array ke bhitar array ke bhitar array--->here depth=3;

console.log(arr2.flat(Infinity));//return new array--> combine all subArray and give just simple array with no sub array
//note2
//spread(...)--->ek-ek element ko spread kar deta deta h ,chahe array ho ,string ya fir any variable
//.flat--->subArrays ko ek array me hi convert kar deta h ,and single array banata h with no subarray

//FUNCTIONS
console.log(Array.isArray('punit'));//return true or false
console.log(Array.from("punit"));//convert into array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


//note3-->
//array.isArray()--->use karna h ,aage array lagana h 
//Array.from--->array me convert  karta h kisi bhi value ko
//if you pass object in from i.e,-->Array.from({name:"punit"})-->then it will return empty array
//you have to specify that ,aapko (key) ko array banana h ya fir (value) ko;
//++++++++++
//Array.of--->return new array from given variable or string or elements












