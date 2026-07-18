//note--> use backtick(``)--to string and to add variable in it;Here--`My name is ${variable_name}`;

let str="    punit    ";//general construction
// let str=new String("punit");systematic construction

//string functions
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2));//character at index
console.log(str.indexOf('t'));//return the first ccurance of "t";


//.legth-->is a property NOT a function .length();

//some more functions
console.log(str.substring(0,4));//return  substring starting fro 0 and ending with (end-1);END is excluded
console.log(str.slice(0,4));//do same work and END is excluded--->.slice(start,end+1)


console.log(str.trim());//remove starting and ending spaces -->eg;"   punit   ";output-->"punit";
console.log(str.replace('n','m'));//replaces N with M

let newStr="punit-kumar-singh&coder";

console.log(newStr.split("-"));//split string on the basis of "- " and return in form of array ;ON THE BASIS OF PARAMETER PASSED

