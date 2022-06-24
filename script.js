
let arrA = [1, 2, 8, 'hello', 4, 5];
let arrB = [1, 2, 3, true, 4, undefined, 'abc', 13, 6];

function checkNumSum(a, b) {

    function getSum(arr) {

        let arrSum = 0;

        for(let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                arrSum += arr[i];
            } 
        }
        
        return arrSum;
    }

    let sumA = getSum(arrA);
    let sumB = getSum(arrB);

    if(sumA > sumB) {
        return arrA;
    } else {
        return arrB;
    }
}

console.log(checkNumSum(arrA, arrB));
