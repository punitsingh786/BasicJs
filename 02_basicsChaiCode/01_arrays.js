const myArr=[1,2,3,4,5,6,true,"punit"];
console.log(myArr);

//note1-->
//javascript me different type ke element 1 Array me store ho sakte hai 
//javascript arrays are resizable
//shallow copy--change in original variable 
//Deep copy--change in copy variable 
//length is property not function -->dont use parenthesis()--> length()-->wrong--length-->right

//METHODS
myArr.push(7);//Add at  last
console.log(myArr);

myArr.pop();//remove from the last
console.log(myArr);


myArr.unshift(9);//add at first 
console.log(myArr);

myArr.shift();//remove from first
console.log(myArr);
//note-->2
//dont use unshift()--> i.e, for adding at first and shift()-->i.e, for removing from first

//MORE METHODS
console.log(myArr.includes(3));// present in array --->  return true otherwise--> false
console.log(myArr.includes(10));

console.log(myArr.indexOf(4));//return index-->if found   else-->return -1
console.log(myArr.indexOf(23));

//copying array from another array 
const newArr=myArr.join();
//copy the array into another array --->convert it into string--->seperated by coma
console.log(newArr);

//Slice and Splice 
myArr.slice(1,3);//return part of index from starting to ending-1;--->ending index is excluded
console.log("AFTER SLICE",myArr);
myArr.splice(1,3);//ending index is included--->return part of array
console.log("AFTER SPLICE",myArr);

//note-->3
//Difference b/w Splice and Slice
//1.slice()-->Original array me koi change nhi hoga 
//2.Splice()-->Original array me se given section ko remove kar deta h 
//--->original array me bass bacha hua section hi rahta h 












