//FOR OF LOOP
const arr=[1,2,3,4,5];
for(const val of arr){
    // console.log(val);
    
}
const str="hello i am punit singh";
for(let val of str){
    // console.log(val);
    
}
//MAP-->map me unique values hoti h -->(key,value ) form me ,seperated by coma 
const map=new Map;
map.set("in","india");
map.set("usa","united states of america ");
map.set("fr","france");

for(let [key,value] of map){
    // console.log(key);
    // console.log(value);
    
    
    // console.log(`${key} :-${value}`);
    
    
}
//note1-->
//map me unique values hote hai,same order me 
//map.set(key,value)-->karke you can set
//FOR-OF LOOP ARRAY,MAP KE LIYE BEST HOTA H USE KARNA  

//FOR-IN LOOP
const myObj={
    "js":"java sscript",
    "cpp":"c plus plus",
    "rd":"ruby"
};
for(let key in myObj){
    // console.log(key);
    console.log(myObj[key]);
    
    
}

//note2-->
//for-of-->me sidha value aati h 
//for-in-->me index aati hai,usko index karke access karte h
//FOR-IN-->OBJECTS,KE LIYE HOTA H 