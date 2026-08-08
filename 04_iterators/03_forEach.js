const coding=['java script','cpp','java','python','prog in r '];
coding.forEach((index,item,champu,ananya)=>{
    
    // console.log(index);
    // console.log(item);
    // console.log(champu);
    // console.log(ananya);
    

})
//note1-->
//Inside forEach loop-->pass callABck function,ALSO PASS PREDIFINED FUNCTION
//Callback function--->function without name
//you can pass-->ARROW FUNCTION

//BASED ON NO OF PARAMETER INSODE ARROW FUNCTION
//NO OF PARAMETER=1-->RETURN VALUE AT EACH INDEX
//NO FO PARAMETER=2-->RETURN VALUE AT EACH INDEX + INDEX NO 
//PARAMETER=3-->RETURN VALUE+INDEX NO+COMPLETE ARRAY 
//PARAMETER=4-->1 VALUE IS UNDEFINED AND REST VALUE SAME 

const myArr=[
    {
        language:"js",
        languageFullName:"java script "    
    },
    {
        language:"cpp",
        languageFullName:"c plus plus"
    },
    {
        language:"py",
        languageFullName:"python"
    }
]


//access using forEach loop 
myArr.forEach((item)=>{
    console.log(item.language,item.languageFullName);
    // console.log(item.languageFullName);
    
})
//note2-->
//for each is your go to loop when you are accessing data from database
//it sends data in form of array and inside array you will have multiple objects 
//for each can be used on every data structure ;