function countdown(num) {
    arr = [];
    while(num>=0) {
        arr.push(num);
        num--;
    }
    console.log(arr);
    console.log(arr.length);
}
// countdown(8);

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

//console.log("returned value " + printReturn([47, 99]));

function firstPlus(arr) {
    return arr[0] + arr.length;
}
// console.log(firstPlus([2, 4, 1, 3]));
// console.log(firstPlus([2, 4, 1, 3, 6, 7]));
// console.log(firstPlus(["what", 4, 1, 3, 6, 7]));
// console.log(firstPlus([true, 4, false, 3]));

function greaterSecond(arr) {
    newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>arr[1]) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    console.log(newArr.length);
}
// greaterSecond([2, 3, 4, 1, 6, 4, 0, 10]);
// greaterSecond([1,3,5,7,9,13]);
// greaterSecond([5])

function thisLength(num1, num2) {
    var arr = [];
    if(num1==num2) {
        console.log("Jinx!");
    }
    else {
        for(var i=0; i<num1; i++) {
            arr.push(num2);
        }
        console.log(arr);
    }
}
// thisLength(4,4);
// thisLength(5,2);

function fitFirst(arr) {
    if (arr.length>arr[0]) {
        console.log("Too big");
    }
    else if(arr[0]>arr.length) {
        console.log("Too small");
    }
    else {
        console.log("just right");
    }
}
// fitFirst([2, 3, 1, 4]);
// fitFirst([7, 2, 3, 1]);
// fitFirst([4, 3, 2, 1]);

function celsiusToFahrenheit(tempC) {
    var tempF = tempC * 1.8 + 32;
    return tempF;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));