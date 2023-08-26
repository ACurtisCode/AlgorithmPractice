function printSequence() {
    for(var i=-52; i<=1066; i++) {
        console.log(i);
    }
}
//printSequence();

function beCheerful() {
    for(var i=1; i<99; i++) {
        console.log("good morning!");
    }
}
//beCheerful();

function multOfThree() {
    for(var i=-300; i<0; i=i+3) {
        if(i!=-3) {
            if(i!=-6){
                console.log(i);
            }
        }
    }
}
//multOfThree();

function whileInt() {
    var i = 2000;
    while(i<=5280) {
        console.log(i);
        i++;
    }
}
// whileInt();

function birthday(num1, num2) {
    if(num1 == 6 && num2 == 26) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}
// birthday(6, 26);
// birthday(2, 17);

function leapYear(year) {
    if(year%4 ==0) {
        if(year%100==0 && year%400!=0) {
            console.log("it is not a leap year");
        }
        else {
            console.log("it is a leap year");
        }
    }
    else {
        console.log("it is not a leap year");
    }
}
// leapYear(4);
// leapYear(7);
// leapYear(100);
// leapYear(400);

function printAndCount() {
    var index = 0;
    for(var i=512; i<=4096; i++) {
        if(i%5 == 0) {
            console.log(i);
            index++
        }
    }
    console.log(index);
}
//printAndCount();

function multOfSix() {
    var i = 6;
    while (i<=60000) {
        if (i%6 == 0) {
            console.log(i);
        }
        i++;
    }
}
//multOfSix();

function whatDoYou(incoming) {
    console.log(incoming);
}
// whatDoYou("cheese");
// whatDoYou("ball");

function hugeNumber() {
    var sum = 0;
    for(var i=-300000; i<=300000; i++) {
        if(i%3==0 || i==1 || i==-1) {
            console.log(i);
            sum = sum + i;
        }
    }
    console.log(sum);
}
//hugeNumber();

function finalCountdown(param1, param2, param3, param4) {
    while (param2 < param3) {
        if (param2 != param4 && param2%param1==0) {
            console.log(param2);
        }
        param2++;
    }
}
finalCountdown(3, 5, 17, 9);