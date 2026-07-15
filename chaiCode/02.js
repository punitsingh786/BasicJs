let score=33;
console.log(typeof(score));
//string to Number 
let n1Score="33";
let v1Score=Number(n1Score);
console.log(v1Score);
console.log(typeof(v1Score));
//string to number
let n2Score="33abc";
let v2Score=Number(n2Score);
console.log(v2Score);
console.log(typeof(v2Score));
//number  to boolean
let n3=1;
let v3=Boolean(n3);
console.log(v3);
console.log(typeof(v3));
let n4=0;
let v4=Boolean(n4);
console.log(v4);
console.log(typeof(v4));
//note-->
//"33"=>33
//"33abc"=>NaN

//string to boolean
let n5="";
let v5=Boolean(n5);
console.log(v5);
console.log(typeof(v5));
let n6="punit";
let v6=Boolean(n6);
console.log(v6);
console.log(typeof(v6));
//note-->
//""=>false
//"punit"=>true


