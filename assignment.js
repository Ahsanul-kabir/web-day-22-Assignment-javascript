// https://github.com/Ahsanul-kabir/web-day-22-Assignment-javascript


// 1------ kilometerToMeter
function kilometerToMeter(km) {

    // check valid or not
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
var resultKM = kilometerToMeter(7);
console.log(resultKM);



// 2------- budgetCalculator
function budgetCalculator(watchWant, phoneWant, laptopWant) {

    // check valid or not
    if (watchWant < 0 || phoneWant < 0 || laptopWant < 0) {
        return "WARNING: You Can't give negative value and String!";
    } else if ((watchWant >= 'a' || watchWant <= 'z') || (watchWant >= 'A' || watchWant <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else if ((phoneWant >= 'a' || phoneWant <= 'z') || (phoneWant >= 'A' || phoneWant <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else if ((laptopWant >= 'a' || laptopWant <= 'z') || (laptopWant >= 'A' || laptopWant <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else {
        // given price
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;

        // calculate indidual price
        var resultWatch = watchPrice * watchWant;
        var resultPhone = phonePrice * phoneWant;
        var resultLaptop = laptopPrice * laptopWant;

        var totalCost = resultWatch + resultPhone + resultLaptop; // total cost
        return totalCost;
    }

}
var resultBudget = budgetCalculator(2, 5, 3);
console.log(resultBudget);




// 3---------hotelCost
function hotelCost(days) {

    // check valid or not
    if (days < 0) {
        return "WARNING: You Can't give negative value!";
    } else if ((days >= 'a' || days <= 'z') || (days >= 'A' || days <= 'Z')) {
        return "WARNING: You Can't give String value!";
    } else {

        // given distance
        var noDiscountPhese = 100;
        var discountPhese1 = 80;
        var discountPhese2 = 50;
        var totalRentCost = 0;

        // calculate cost
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
var resultHotelCost = hotelCost(15);
console.log(resultHotelCost);




// 4----------megaFriend
function megaFriend(names) {

    // check given friend list is empty or not
    if (names.length === 0) {
        return "WARNING: No friends listed!";
    } else {
        // initialize the first name as megaFriendName
        var megaFriendName = names[0];

        for (var i = 1; i < names.length; i++) {
            // check valid or not
            if (typeof names[i] != 'string') {
                return "WARNING: You have to give String value all the parameter!";
            }


            // find big length of name
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