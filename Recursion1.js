function recursiveSigma(num) {
    if(num == 0) {
        return 0;
    }
    if(num > 0) {
        return num + recursiveSigma(num-1);
    }
    else {
        return num;
    }
}
console.log(recursiveSigma(5));

function recursiveFactorial(num) {
    if(num == 0) {
        return 1;
    }
    else if(num>0) {
        return parseInt(num) * recursiveFactorial(parseInt(num)-1);
    }
    else {
        return num;
    }
}
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(6.5));

function floodFill(canvas2D, startXY, newColor) {
    
}