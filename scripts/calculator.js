/*
   Author: Stu Dent

   File Name: calculator.js
 
   Created: March 25, 2015
   Last Updated: March 25, 2015
*/


/* ======================== CREATE CALCULATOR KEYS ======================== */

    var keys = [];

    keys[0] = {txt:"7" , id:"seven"};
    keys[1] = {txt:"8" , id:"eight"};
    keys[2] = {txt:"9" , id:"nine"};
    keys[3] = {txt:"/" , id:"divide"};
    keys[4] = {txt:"4" , id:"four"};
    keys[5] = {txt:"5" , id:"five"};
    keys[6] = {txt:"6" , id:"six"};
    keys[7] = {txt:"x" , id:"multiply"};
    keys[8] = {txt:"1" , id:"one"};
    keys[9] = {txt:"2" , id:"two"};
    keys[10] = {txt:"3" , id:"three"};
    keys[11] = {txt:"-" , id:"subtract"};
    keys[12] = {txt:"c" , id:"clear"};
    keys[13] = {txt:"0" , id:"zero"};
    keys[14] = {txt:"=" , id:"equal"};
    keys[15] = {txt:"+" , id:"add"};
    


    function createKeys(){
        var keyList = document.getElementById("keys");
        
        for(i=0; i < keys.length; i++){
            
            var listItem = document.createElement("li");
            //creates a new <li>
            
            listItem.className = "col col-25";
            //sets the <li class="col col-25">
            
            listItem.innerHTML = "<a id='"+keys[i].id+"' class='col col-100' onClick='onClick(\""+keys[i].id+"\");'>"+keys[i].txt+"</a>";
            //adds <a> to <li>
            
            keyList.appendChild(listItem);
            
        }//end for
        
    }//end createKeys()


/* ======================== CALCULATOR FUNCTIONS ======================== */

    var myNum1 = 0.0; //first number
    var myNum2 = 0.0; //second number
    var myDigit; //digit presed
    var myValue; //return value
    var myOpt;  //operter used
    var firstNum = true; //first number true or false

    function onClick(myKey){

        switch(myKey){
            case "one":
                myDigit = 1;
                num();
                break;
            case "two":
                myDigit = 2;
                num();
                break;
             case "three":
                myDigit = 3;
                num();
                break; 
            case "four":
                myDigit = 4;
                num();
                break;
            case "five":
                myDigit = 5;
                num();
                break;
            case "six":
                myDigit = 6;
                num();
                break;
            case "seven":
                myDigit = 7;
                num();
                break;
            case "eight":
                myDigit = 8;
                num();
                break;
            case "nine":
                myDigit = 9;
                num();
                break;
            case "zero":
                myDigit = 0;
                num();
                break;
            case "add":
                myOpt="add";
                firstNum= false;
                decimal = false;
                break;
            case "divide":
                myOpt="divide";
                firstNum= false;
                decimal = false;
                break;
           case "multiply":
                myOpt="multiply";
                firstNum= false;
                decimal = false;
                break;
            case "subtract":
                myOpt="subtract";
                firstNum= false;
                decimal = false;
                break;
            case "equal":
                calc();
                break;
            case "clear":
                clear();
                break;
            default:
                break;
        }//end switch
        
    }//onClick()

function num(){

    
    if(firstNum){
        if (myNum1 == 0){
            myNum1= myDigit;
        }else{
            myNum1 = (myNum1 * 10) + myDigit;
        }//end else

            document.getElementById("screen").innerHTML = myNum1.toString();
        
    }else{
        if (myNum2 == 0){
            myNum2= myDigit;
        }else{
            myNum2 = (myNum2 * 10) + myDigit;
        }//end else

            document.getElementById("screen").innerHTML = myNum2.toString();
    }
}//num


function calc(){
    //myNum1 = parseFloat(myNum1);
    //myNum2 = parseFloat(myNum2);
    
    switch(myOpt){
        case "add":
        myValue=myNum1 + myNum2;
        myNum1 = myValue;
        myNum2 =0;
        document.getElementById("screen").innerHTML = myNum1.toString();
        break;
        case "subtract":
        myValue=myNum1 - myNum2;
        myNum1 = myValue;
        myNum2 =0;
        document.getElementById("screen").innerHTML = myNum1.toString();
        break;
        case "multiply":
        myValue=myNum1 * myNum2;
        myNum1 = myValue;
        myNum2 =0;
        document.getElementById("screen").innerHTML = myNum1.toString();
        break;
        case "divide":
        myValue=myNum1 / myNum2;
        myNum1 = myValue;
        myNum2 =0;
        document.getElementById("screen").innerHTML = myNum1.toString();
        break;
        case "decimal":
        myValue= myNum1;
        myNum1=myValue;
        myNum2=0;
        break;
        default:
        break;
}//end switch
    }//end calc()
    

function clear(){
 myNum1=0;// first number
 myNum2=0;//second number
 myDigit=0;//digit presed
 myValue=0;//return value
 firstNum=true; // first number true or false
 document.getElementById("screen").innerHTML = "0";
}//clear()