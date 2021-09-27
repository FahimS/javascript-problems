var num=[2,3,4,5,3,4,7,8,9,7,5];
var uniqueNum=[];

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    var index=uniqueNum.indexOf(element);
    if(index==-1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);