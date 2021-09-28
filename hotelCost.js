
function hotelCost(day){
    if(day<0){
        return "Negative value is not acceptable";
    }
    totalCost=0;
    if (day<=10) {
        totalCost=day*100;
    }
    else if(day<=20){
        firstTenDays=10*100;
        remainingDays=day-10;
        secondTenDays=remainingDays*80;
        totalCost=firstTenDays+secondTenDays;
    }
    else{
        firstTenDays=10*100;
        secondTenDays=10*80;
        remainingDays=day-20;
        afterTwentyDays=remainingDays*50;
        totalCost=firstTenDays+secondTenDays+afterTwentyDays;
    }
    return totalCost;
}
var result=hotelCost(21);
console.log(result);