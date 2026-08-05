for(let i=0;i<5;i++){
    console.log(i);
    
}
 let arr=["batman","iron man","super man","thor"];
 for(let  i=0;i<arr.length;i++){
    console.log(arr[i]);
    
 }
 for(let i=1;i<20;i++){
    if(i==12){
        continue;
    }
    if(i==15){
        break;

    }

    console.log(i);
    
 }
 //note1-->
 //break-->stops code execution and get out of loop 
 //continue-->skip particular iteration--> directy jump to the next iteration ,WITHOUT EXECUTING ANY CODE 