//Push Front
function pushFront(arr, val) {
    for(var i=0; i<arr.length; i++) {
        arr[arr.length-i] = arr[arr.length-i-1];
    }
    arr[0] = val;
    console.log(arr);
}
// pushFront([5,7,2,3], 8);
// pushFront([99], 7);

//Pop Front
function popFront(arr) {
    var temp = arr[0];
    for(var i=arr.length-1; i>=0; i--) {
        arr[arr.length-i-1] = arr[arr.length-i];
    }
    arr.pop();
    console.log(arr);
    return temp;
}
// console.log("returned value is: " + popFront([0,5,10,15]));
// console.log("returned value is: " + popFront([4,5,7,9]));

// Insert At
function insertAt(myArr, index, val) {
    for(var i=myArr.length; i>=index; i--) {
        myArr[i] = myArr[i-1];
    }
    myArr[index] = val;
    console.log(myArr);
}
// insertAt([100,200,5], 2, 311);
// insertAt([9,33,7], 1, 42);

//Remove at
function removeAt(arr, index) {
    var temp = arr[index];
    for(var i=index; i<arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(arr);
    return temp;

}
// console.log("returned value is: " + removeAt([1000,3,204,77], 1));
// console.log("returned value is: " + removeAt([8,20,55,44,98], 3));

//Swap Pairs
// function swapPairs(arr) {
//     if(arr.length%2 != 0) {
//         var evenArr = [];
//         var oddArr = [];
//         var temp = arr.pop;
//         for(var i=arr.length-1; i>=0; i--) {
//         if(i%2==0) {
//             evenArr.push(arr[i]);
//         }
//         else {
//             oddArr.push(arr[i]);
//         }
//         }
//         for(var i=0; i<arr.length; i++) {
//             if(evenArr.length>0) {
//                 if(i%2 == 0) {
//                     arr[i] = evenArr.pop();
//                 }
//                 else {
//                     arr[i] = oddArr.pop();
//                 }
//             }
//         }
//     }
//     arr.push(temp);
//     console.log(arr);
// }

// swapPairs([1,2,3,4]);
// swapPairs(["Brendan", true, 42]);