let previousdisplay="0";
let currentDisplay="0";
let operator="";
let ans=0;
let firstNumFlag=0;

previousdisplay="Aniket";
currentDisplay="0";

let displayModule=document.querySelector(".digit2");
let displayModule1=document.querySelector(".digit1");

let one=document.querySelector("#onebtn");
let two=document.querySelector("#twobtn");
let three=document.querySelector("#threebtn");
let four=document.querySelector("#fourbtn ");
let five=document.querySelector("#fivebtn");
let six=document.querySelector("#sixbtn");
let seven=document.querySelector("#sevenbtn");
let eight=document.querySelector("#eightbtn");
let nine=document.querySelector("#ninebtn");
let zero=document.querySelector("#zerobtn");


one.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="1";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="1";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
two.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="2";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="2";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
three.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="3";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="3";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
four.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="4";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="4";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
five.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="5";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="5";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})

six.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="6";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="6";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
seven.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="7";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="7";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})
eight.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="8";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="8";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})

nine.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="9";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="9";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})

zero.addEventListener("click",function(){

    if(currentDisplay.length===1 && firstNumFlag===0)
    {
        currentDisplay="0";
        firstNumFlag=1;
    }else
    {
        currentDisplay+="0";
        
    }
    displayModule.innerHTML=currentDisplay;
    
})


//Operatore EventListner

let equal = document.querySelector("#equalbtn");
let add=document.querySelector(".add");
let sub=document.querySelector(".sub");
let mul = document.querySelector(".mul");
let divide= document.querySelector(".divide");

add.addEventListener("click",function(){

    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="+";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;



})

sub.addEventListener("click", function(){

    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="-";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
})

mul.addEventListener("click", function(){

    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="x";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
})

divide.addEventListener("click", function(){

    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="/";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
})

function addition(a , b)
{
    return a+b;
}

function substraction(a , b)
{
    return a-b;
}

function multiplication(a , b)
{
    return a*b;
}

function Division(a , b)
{
    return a/b;
}


equal.addEventListener("click" , function(){

    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    //displayModule.innerHTML=number(currentDisplay)+number(previousdisplay);
    let b=parseInt(currentDisplay);
    let a=parseInt(previousdisplay);
    let ans=0;
    firstNumFlag=0;
    
    switch(operator)
    {
        case "+":
            ans=addition(a , b);
            break;
        case "-":
            ans=substraction(a , b);
            break;
        case "/":
            ans=Division(a , b).toFixed(4);
            break;
        case "x":
            ans=multiplication(a,b);
            break;
        default:
            ans=-1;
            break;
    }
    
   
    displayModule.innerHTML=ans;
})

let ac=document.querySelector("#acbtn");
let clr=document.querySelector("#clrbtn");

ac.addEventListener("click" , function(){

    previousdisplay="0";
    currentDisplay="0";
    firstNumFlag=0;
    displayModule.innerHTML=currentDisplay;
    displayModule1.innerHTML=previousdisplay;

})

clr.addEventListener("click" , function(){

    if(currentDisplay.length===0)
    {
        currentDisplay="0";
        previousdisplay="0";
        firstNumFlag=0;
    }else
    {
        currentDisplay=currentDisplay.slice(0 , currentDisplay.length-1);
    }
    
    displayModule.innerHTML=currentDisplay;
    displayModule1.innerHTML=previousdisplay;
})





