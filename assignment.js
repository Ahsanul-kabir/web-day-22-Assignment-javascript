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


// hotelCost
function hotelCost(days) {
    noDiscountPhese = 100;
    discountPhese1 = 80;
    discountPhese2 = 50;

    if (days >= 1 && days <= 10) {
        var rent = days * noDiscountPhese;
    } else if (days >= 11 && days <= 20) {
        rent10_days = noDiscountPhese * 10;
        bonusDay = days - 10;
        var rent10_up_days = bonusDay * discountPhese1;
        var rent = rent10_days + rent10_up_days;
    } else {
        rent20_days = (noDiscountPhese * 10) + (discountPhese1 * 10);
        bonusDay = days - 20;
        var rent20_up_days = bonusDay * discountPhese2;
        var rent = rent20_days + rent20_up_days;
    }
    return rent;
}
var resultHotelCost = hotelCost(22);
console.log(resultHotelCost);