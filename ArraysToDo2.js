// Reverse
function reverseArray(arr) {

    for(var i=0; i <arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }

    console.log(arr);
}
// reverseArray([1,2,3,4,5]);

// Rotate
function rotateArray(arr, shiftBy) {
    if(shiftBy<0) {
        for(var i=0; i>shiftBy; i--){
            var temp = arr[0];
            for(var j=0; j<arr.length; j++) {
                    arr[j] = arr[j+1]; 
            }
            arr[arr.length-1] = temp;
        }
    }
    else{
    for(var i=0; i < shiftBy; i++) {
        var temp = arr[arr.length-1];
        for(var j=arr.length-1; j>0; j--) {
                arr[j] = arr[j-1]; 
        }
        arr[0] = temp;
    }
}
    console.log(arr);
}
// rotateArray([1,2,3,4,5], 1);
// rotateArray([1,2,3,4,5], 2);
// rotateArray([1,2,3,4,5], 3);
// rotateArray([1,2,3,4,5], 1000001);
// rotateArray([1,2,3,4,5], -1);

function filterRange(arr, min, max) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] <= min || arr[i] >= max) {
            for(var j=i; j<arr.length; j++) {
                    arr[j] = arr[j+1];                
            }
            arr.pop();
            i--;
        }
    }
    console.log(arr);
}
// filterRange([1,3,4,5,6,7,8], 3, 7);
// filterRange([1,3,4,5,6,7,8], 4, 6);

//Concat
function concatArray(firstArr, secondArr) {
    for(var i=0; i<secondArr.length; i++) {
        firstArr.push(secondArr[i]);
    }
    console.log(firstArr);
}
// concatArray(["yes", "no"], [1, 2]);