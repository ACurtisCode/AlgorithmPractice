var input1 = 0;
var input2 = 0;
var operator1 = 0;

function setOP(operator) {
    operator1 = operator;
    input2 = input1;

}
function press(input) {
    if (input1 == 0) {
        input1 = input;
        document.querySelector("#display").innerText = input1;
    }

    else if (input == ".") {
        document.querySelector("#display").innerText = document.querySelector("#display").innerText + input;
        input1 = document.querySelector("#display").innerText;
    }
    else if (document.querySelector("#display").innerText.includes(".")) {
            document.querySelector("#display").innerText = document.querySelector("#display").innerText + input;      
            input1 = document.querySelector("#display").innerText;  
    }

}
function calculate() {

}