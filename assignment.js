// Source Code: https://github.com/Ahsanul-kabir/web-day-22-Assignment-javascript


// kilometerToMeter
function kilometerToMeter(km) {

    if (km < 0) {
        return "WARNING: You Can't give negative value!";
    } else if ((km >= 'a' || km <= 'z') || (km >= 'A' || km <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else {

        // main logic phase
        var meter = km * 1000;
        return meter;
    }
}
var resultKM = kilometerToMeter(1.2); // take return
console.log(resultKM);



// budgetCalculator
function budgetCalculator(watchH, phoneH, laptopH) {

    if (watchH < 0 || phoneH < 0 || laptopH < 0) {
        return "WARNING: You Can't give negative value and String!";
    } else if ((watchH >= 'a' || watchH <= 'z') || (watchH >= 'A' || watchH <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else if ((phoneH >= 'a' || phoneH <= 'z') || (phoneH >= 'A' || phoneH <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else if ((laptopH >= 'a' || laptopH <= 'z') || (laptopH >= 'A' || laptopH <= 'Z')) {
        return "WARNING: You Can't give String value!";
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
var resultBudget = budgetCalculator(10, 20, 0); // take return
console.log(resultBudget);




// hotelCost
function hotelCost(days) {

    if (days < 0) {
        return "WARNING: You Can't give negative value!";
    } else if ((days >= 'a' || days <= 'z') || (days >= 'A' || days <= 'Z')) {
        return "WARNING: You Can't give String value!";
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
var resultHotelCost = hotelCost(12); // take return
console.log(resultHotelCost);


// megaFriend
function megaFriend(names) {

    // check given friend list is empty or not.
    if (names.length === 0) {
        return "WARNING: No friends listed!";
    } else {
        // initialize the first name as megaFriendName.
        var megaFriendName = names[0];

        for (var i = 1; i < names.length; i++) {
            if (typeof names[i] != 'string') {
                return "WARNING: You have to give String value!";
            }
            // change megaFriendName if find a larger one
            if (megaFriendName.length < names[i].length) {
                megaFriendName = names[i];
            }
        }
    }
    return megaFriendName;
}

var names = ['Rafiq', 'Sadik', 'Ahsanul Kabir'];
var checkBigName = megaFriend(names);
console.log(checkBigName);