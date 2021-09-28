function budgetCalculator(watch, phone, laptop) {
    let total = 0;
    watchMoney = watch * 50;
    phoneMoney = phone * 100;
    laptopMoney = laptop * 500;
    total = watchMoney + phoneMoney + laptopMoney;
    if (watchMoney < 0 || phoneMoney < 0 || laptopMoney < 0) {
        return "Negative value is not acceptable";
    }
    else {
        return total;
    }
}
var result = budgetCalculator(2, -2, 1);
console.log(result);