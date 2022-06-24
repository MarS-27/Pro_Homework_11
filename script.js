
arrA = [1, 2, 8, 'hello', 4, 5];
arrB = [1, 2, 3, true, 4, undefined, 'abc', 13, 6];

function checkNumSum(a, b) {

    function getSum(arr) {
        arrSum = 0;
        for(i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                arrSum += arr[i];
            } 
        }
        return arrSum;
    }

    sumA = getSum(arrA);
    sumB = getSum(arrB);

    if(sumA > sumB) {
        return arrA;
    } else {
        return arrB;
    }
}

console.log(checkNumSum(arrA, arrB));
