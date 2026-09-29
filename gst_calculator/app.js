// const os = require("os");


// console.log(os.platform());


// const hi = require("fs");

// console.log(hi.chown)


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("Enter first amount", (answer) => {
    var answer1 = Number(answer);
    rl.question("enter second amount", (answer2)=>{
       var answerTwo =Number(answer2);
       rl.question("enter third amount", (answer3)=>{
        var answerThree =Number(answer3);
        var sum = answer1+answerTwo+answerThree;
    
    let Gst = 0;
    let gstAmount;


if(sum<1000){
    Gst= 0
}else if (sum >= 1000 && sum <=2000){
    Gst= 5
}else{
    Gst=3
}

 
gstAmount = sum*Gst/100;


console.log("Gst rate " + Gst + "%");
console.log("Gst amount " + gstAmount);
console.log("Total Amount " + (sum+gstAmount));
rl.close();
        
    }) 
    })

});
