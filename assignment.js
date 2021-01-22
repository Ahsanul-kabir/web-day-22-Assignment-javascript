// Source Code: https://github.com/Ahsanul-kabir/web-day-22-Assignment-javascript




// kilometerToMeter
function kilometerToMeter(km) {

    if (km < 0) {
        return "You Can't give negative value";
    } else if ((km >= 'a' || km <= 'z') || (km >= 'A' || km <= 'Z')) {
        return "You Can't give String value";
    } else {
        // main logic phase
        var meter = km * 1000;
        return meter;
    }
}
var resultKM = kilometerToMeter("aa"); // take return
console.log(resultKM);






// budgetCalculator
function budgetCalculator(watchH, phoneH, laptopH) {

    if (watchH < 0 || phoneH < 0 || laptopH < 0) {
        return "You Can't give negative value";
    } else if ((watchH >= 'a' || watchH <= 'z') || (watchH >= 'A' || watchH <= 'Z')) {
        return "You Can't give String value";
    } else if ((phoneH >= 'a' || phoneH <= 'z') || (phoneH >= 'A' || phoneH <= 'Z')) {
        return "You Can't give String value";
    } else if ((laptopH >= 'a' || laptopH <= 'z') || (laptopH >= 'A' || laptopH <= 'Z')) {
        return "You Can't give String value";
    } else {
        // main logic phase
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var resultWatch = watchPrice * watchH;
        var resultPhone = phonePrice * phoneH;
        var resultLaptop = laptopPrice * laptopH;

        total = resultWatch + resultPhone + resultLaptop;
        return total;
    }

}
var resultBudget = budgetCalculator("aa", "aa", "aa"); // take return
console.log(resultBudget);





// hotelCost
function hotelCost(days) {

    if (days < 0) {
        return "You Can't give negative value";
    } else if ((days >= 'a' || days <= 'z') || (days >= 'A' || days <= 'Z')) {
        return "You Can't give String value";
    } else {
        // main logic phase
        var noDiscountPhese = 100;
        var discountPhese1 = 80;
        var discountPhese2 = 50;
        var totalRentCost = 0;

        if (days >= 1 && days <= 10) {
            var totalRentCost = days * noDiscountPhese;
        } else if (days >= 11 && days <= 20) {
            var rent10_days = noDiscountPhese * 10;
            var bonusDay = days - 10;
            var rent10_up_days = bonusDay * discountPhese1;
            var totalRentCost = rent10_days + rent10_up_days;
        } else {
            var rent20_days = (noDiscountPhese * 10) + (discountPhese1 * 10);
            var bonusDay = days - 20;
            var rent20_up_days = bonusDay * discountPhese2;
            var totalRentCost = rent20_days + rent20_up_days;
        }
        return totalRentCost;
    }
}
var resultHotelCost = hotelCost("aa"); // take return
console.log(resultHotelCost);


// megaFriend
function megaFriend(names) {
    var count = 0;
    char = names;
    for (i = 0; i < names.length; i++) {
        if (names[i] >= "a" && names[i] <= "z" && names[i] >= "A" && names[i] <= "A") {
            count++;
        }
    }
    return count;
}

var names = ['Rakim', 'Habib', 'Rafiqul', 'Ahsanul Kabir'];
//megaFriend(names);
resultBigName = megaFriend(names);
console.log(resultBigName);