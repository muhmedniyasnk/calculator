//1 display number in text box

function buttonclick(num){
    console.log(num);
    display.value+=num;
}


//2 
function clearbox(){
    display.value=""
}

//3 evaluate expression
function evaluateExpression(){
    // exp=display.value;
    // output=eval(exp);
    // display.value=output;
    display.value=eval(display.value)

}

//4 Remove last item from text box

function removelast(){
    currentexp=display.value;
    display.value=currentexp.slice(0,-1);
}