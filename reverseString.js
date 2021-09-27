function revString(str){
    var reverse ="";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverse=element+reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brother";
var forAlien=revString(statement);
console.log(forAlien);