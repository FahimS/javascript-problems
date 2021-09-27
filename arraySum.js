let numbers = [45, 65, 56, 77, 87, 68, 90, 23, 45, 4];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);


//..............using function..................

function arraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

let numbers = [45, 65, 56, 77, 87, 68, 90, 23, 45, 4];
var result =arraySum(numbers);
console.log(result);