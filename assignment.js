// kilometerToMeter
function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var resultKM = kilometerToMeter(7);
console.log(resultKM);


// budgetCalculator
function budgetCalculator(watchH, phoneH, laptopH) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var resultWatch = watchPrice * watchH;
    var resultPhone = phonePrice * phoneH;
    var resultLaptop = laptopPrice * laptopH;

    total = resultWatch + resultPhone + resultLaptop;
    return total;
}
var resultBudget = budgetCalculator(1, 2, 5);
console.log(resultBudget);