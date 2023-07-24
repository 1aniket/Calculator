
let previousdisplay="0";
let currentDisplay="0";
let operator="";
let ans=0;
let firstNumFlag=0;

previousdisplay="";
currentDisplay="0";

let displayModule=document.querySelector(".digit2");
let displayModule1=document.querySelector(".digit1");
let value=0;

let equal = document.querySelector("#equalbtn");
let add=document.querySelector(".add");
let sub=document.querySelector(".sub");
let mul = document.querySelector(".mul");
let divide= document.querySelector(".divide");


/*JQuery*/

//On Ui button press
$("button").on("click" , function()
{
    let btnId=$(this).attr("id");
    
    $("#"+btnId).addClass("btn-press");
    setTimeout( function(){
        $("#"+btnId).removeClass("btn-press")
    },250);


    value = $("#"+btnId).text();
    

    if(value!=="+" && value!=="-" && value!=="x" && value!=="=" && value!=="ac" && value!=="clr"){

        if(currentDisplay.length===1 && firstNumFlag===0)
        {
            currentDisplay=value;
            firstNumFlag=1;
        }else
        {
            currentDisplay+=value;
        }
        displayModule.innerHTML=currentDisplay;
    
    }
    
})

//On Keyboard Button Press

$(document).on("keypress" , function(Event){
    
    value = Event.key;
    console.log(value);

    if(value==="+")
    {
        keypressadd();
    }else if (value==="-")
    {
        keypresssub();

    }else if (value==="/")
    {
        keypressdiv();
    }else if(value==="*")
    {
        keypressmul();
    }else if(value==="Enter")
    {
        keypressequal();
    }

    
    
    let btnId=$("."+value).attr("id");
    
    
    $("#"+btnId).addClass("btn-press");
    setTimeout( function(){
        $("#"+btnId).removeClass("btn-press")
    },250);


    

    if(value!=="+" && value!=="-" && value!=="x" && value!=="=" && value!=="ac" && value!=="clr" && value<=9 &&value>=0 ){

        if(currentDisplay.length===1 && firstNumFlag===0)
        {
            currentDisplay=value;
            firstNumFlag=1;
        }else
        {
            currentDisplay+=value;
        }
        displayModule.innerHTML=currentDisplay;
    
    }
    
})



//Operatore EventListner

//for Keyboard button Press 
function keypressadd()
{
    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="+";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
}

function keypresssub()
{
    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="-";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
}

function keypressmul()
{
    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="x";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
}

function keypressdiv()
{
    previousdisplay=currentDisplay;
    currentDisplay="0";
    operator="/";
    displayModule1.innerHTML=previousdisplay+operator+currentDisplay ;
    displayModule.innerHTML=currentDisplay;
    firstNumFlag=0;
}

function keypressequal()
{
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
           
            break;
    }
    
   
    displayModule.innerHTML=ans;
    currentDisplay=ans;
}



//for UI button press

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
           
            break;
    }
    
   
    displayModule.innerHTML=ans;
    currentDisplay=ans;
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
   
})
