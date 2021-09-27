var num = 2.12345;

var result = Math.floor(num);
console.log(result);

var result2 = Math.ceil(num);
console.log(result2);

var result3 = Math.round(num);
console.log(result3);

var dice = Math.random() * 10;
var randomNub = Math.round(dice);
console.log("Random number:", randomNub);

//...........using for-loop................

for (let i = 0; i < 10; i++) {
    var dice = Math.random() * 10;
    var randomNub = Math.round(dice);
    console.log("Random number:", randomNub);
}