const course={
    courseName:"js in hindi ",
    price:999,
    courseInstructor:"hitesh"
};
console.log(course.courseInstructor);

//OBJECT DE-CONSTRUCTOR

const{courseInstructor}=course;//const{de constructor banana h kiska}=course ka 
console.log(courseInstructor);

//you can assign name to de-constructor
const{courseInstructor:instructor}=course;//courseInstructor ka naam ab --->instructor ho gya 
console.log(instructor);

//note1-->
//API-->means --APNA KAAM KISI AAUR KO DE DENA 
//JSON--OBJECT WITHOUT NAME 9SOME TIME ARRAY)
//api call me mostly object milta h
//kabhi -kabhi array  bhi milta h 
//ALL API ARE JSON FORMAT 



