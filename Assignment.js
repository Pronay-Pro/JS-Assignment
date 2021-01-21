

// Repository Link : https://github.com/Pronay-Pro/JS-Assignment

// Problem1:


function kilometerToMeter(value) {

    //if user enter nagative value//

    if (value < 0) {
        return "Opps!!! distance cannot be negative.";
    }
    var meter = value * 1000;
    return meter;
}
var result = kilometerToMeter();
console.log(result);



// Problem2:


function budgetCalculator(watch, mobile, laptop) {

    //when user enter all nagative value this condition will be return 0(zero)//

    if (watch < 1 && mobile < 1 && laptop < 1) {
        return 0;
    }

    // when user enter two nagative value but enter one positive value this condition will be calculate the positive one value//

    else if (watch < 1 && mobile < 1 || mobile < 1 && laptop < 1 || laptop < 1 && watch < 1) {
        if (watch > 1) {
            watch = watch * 50;
            return watch;
        }
        else if (mobile > 1) {
            mobile = mobile * 100;
            return mobile;
        }
        else {
            laptop = laptop * 500;
            return laptop;
        }
    }
    else if (watch < 1) {
        watch = watch * 0;
    }
    else if (mobile < 1) {
        mobile = mobile * 0;
    }
    else if (laptop < 1) {
        laptop = laptop * 0;
    }
    watch = watch * 50;
    mobile = mobile * 100;
    laptop = laptop * 500;
    var totalCost = watch + mobile + laptop;
    return totalCost;
}
var needToBudget = budgetCalculator();
console.log(needToBudget);



// // Problem3:

function hotelCost(stayInHotel) {
    totalCost = 0;
    if (stayInHotel < 0) {
        return "You can't enter nagative value"; //when user enter nagative value this message will be show for user//
    }
    else if (stayInHotel <= 10) {
        totalCost = stayInHotel * 100;
    }
    else if (stayInHotel <= 20) {
        var firstTenDays = 10 * 100;
        var remaing = stayInHotel - 10;
        var secondTenDays = remaing * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        remaing = stayInHotel - 20;
        var overTwentyDays = remaing * 50;
        totalCost = firstTenDays + secondTenDays + overTwentyDays;
    }
    return totalCost;
}
var amount = hotelCost();
console.log(amount);


// // Problem4:

function megaFriend(array) {
    var friend = array[0];
    for (var i = 0; i < array.length; i++) {
        friend = array[i];
        if (array[i] > 1 || array[i] < 1 || array[i == " "]) {
            return "Hey!! Why you enter number?\nYou just want to know you Mega friend name.\nPlease enter your friend name :)";//if user enter number OR Null array
        }
    }
    return friend;
}
var biggestfriendName = megaFriend([]);
console.log(biggestfriendName);