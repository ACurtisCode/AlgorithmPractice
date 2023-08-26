function makeItBig(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            newArr[i] = "big";
        }
        else {
            newArr[i] = arr[i];
        }
    }
    console.log(newArr);
}
// makeItBig([-1, 3, 5, -5]);

function printLow(arr) {
    var low = 0
    var high = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>high) {
            high = arr[i];
        }
        else if(arr[i]<low) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
// console.log("returned value " + printLow([1, 3, -2, 5, -6, 13, 4]));

function printOne (arr) {
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%3==0 || arr[i]==1) {
            return arr[i];
        }
    }
}
// console.log("returned value is " + printOne([2, 4, 1, 3, 5, 6, -1]));

function doubleVision(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}
// console.log(doubleVision([2, 3, 4, 5]));


