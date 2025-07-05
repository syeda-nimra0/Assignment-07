// CH:26-30 MATHS METHOD:
// QUESTION # 01;
let num = +prompt("enter any positive integer:");
let roundVal = Math.round(num);
let floorVal = Math.floor(num);
let ceilVal = Math.ceil(num);
document.write("<h3>Number: " + num + "</h3>");
document.write("Round off value: " + roundVal + "<br>");
document.write("Floor value: " + floorVal + "<br>");
document.write("Ceil value : " + ceilVal + "<br>");
// QUESTION # 02;
let negnum = +prompt("Enter a negative floating number:");
document.write("<h3>Number:" + negnum + "</h3>");
document.write("Round off Number: " + Math.round(negnum) + "<br>");
document.write("Floor value: " + Math.floor(negnum) + "<br>");
document.write("Ceil value : " + Math.ceil(negnum) + "<br>");
// QUESTION # 03;
let absNum = +prompt("Enter a number:");
let absNums = Math.abs(absNum);
document.write("The absolute value of " + absNum + " is " + absNums + "<br>");
// QUESTION # 04;
let dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value is: " + dice);
// QUESTION # 05;
document.write("<h3><i>Dice Throw simulation:</i></h3>");
let toss = Math.floor(Math.random * 2);
if (toss === 0) {
    document.write("Heads" + "<br>");
} else {
    document.write("Tails" + "<br>");
}
// QUESTION # 06;
document.write("<h3>Generated number between 1 to 100:</h3>")
let randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random Number between 1 and 100 is : " + randomNum + "<br>");
// QUESTION # 07;
let userWeight = prompt("Enter your weight:");
let weight = parseFloat(userWeight);
document.write("The weight of user is: " + weight + " Kilograms <br>");
// QUESTION # 08;
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess the secret number from (1 to 10)");
if (userGuess === secretNum) {
    alert("Congratulations! you guessed it right");
} else {
    alert("Wrong! the secret number was " + secretNum);
}

                            // ========end========

// CHAPTER 31-34: DATE METHODS;
// QUESTION # 01;
let now = new Date();
document.write("<h3>Current date and time is: " + now + "</h3>");
// QUESTION # 02;
let monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentMonthName = monthNames[currentMonth];
alert("Current Month: " + currentMonthName);
// QUESTION # 03;
let days = ["Sun", "Mon", "Tues", "Wed", "thurs", "Fri", "Sat"];
let currentDay = new Date();
let nowDay = currentDay.getDay();
let today = days[nowDay];
alert("Current Day: " + today);
// QUESTION # 04;
let daynum = new Date();
let nowAday = daynum.getDay();
if (nowAday === 0 || nowAday === 6) {
    alert("It's a Fun day");
}
// QUESTION # 05;
let todate = new Date();
let getDate = todate.getDate();
if (getDate < 14) {
    alert("First fifteen days of the month");
} else {
    alert("Last fifteen days of the month");
}
// QUESTION # 06;
let geTtime = new Date();
let grabTime = geTtime.getTime();
let minutes = Math.floor(grabTime / (1000 * 60));
document.write("Minutes since Jan 1, 1970: " + minutes + "<br><br>");
// QUESTION # 07;
let totalTime = new Date();
let grabHour = totalTime.getHours();
if(grabHour < 12){
    alert("Its' AM");
}else{
    alert("It's PM");
}
// QUESTION # 07;
let lastDay = new Date("December 31, 2020");
let laterDate = lastDay;
document.write("Later Date: " + laterDate + "<br>");
// QUESTION # 08;
let ramadanDate = new Date("March 23, 2023");
let toDay = new Date();
let diff = toDay.getTime() - ramadanDate.getTime();
let dayPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(dayPassed + " days have passed since 1st Ramadan" + "<br>");
// QUESTION # 09;
let refDate = new Date("January 1, 2015");
let msPassed = refDate.getTime();
let secondsPassed = msPassed / 1000;
document.write("Seconds passed from Jan 1, 1970 till Jan 1, 2015 are: " + secondsPassed);
// QUESTION # 10;
let start2015 = new Date("January 1, 2015");
let referenceDate = new Date("January 1, 1970");
let milliseconds = start2015.getTime() - referenceDate.getTime();
let seconds = milliseconds / 1000;
document.write("Seconds elapsed between Jan 1, 1970 and start of 2015: " + seconds);
// QUESTION # 11;
let referencedate = new Date("December 5, 2015 22:50:16");
let beginning2015 = new Date("January 1, 2015 00:00:00");
let msDifference = referencedate.getTime() - beginning2015.getTime();
let second = Math.floor(msDifference / 1000);
document.write("On reference date: " + referencedate + "<br>");
document.write(second + " seconds had passed since beginning of 2015");
// QUESTION # 12;
let now2 = new Date();
document.write("Current Date: " + now + "<br>");
now2.setHours(now2.getHours() + 1);
document.write("1 hour later, it will be: " + now2 + "<br>");
// QUESTION # 13;
let todayDate = new Date();
todayDate.setFullYear(todayDate.getFullYear() - 100);
alert("100 years back, it was: " + todayDate);
// QUESTION # 14;
let customerName = "Nimra";
let currentdate = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentmonth = months[currentdate.getMonth()];
let numberOfUnits = +prompt("Enter number of units:");
let chargesPerUnit = 20;
let netAmount = numberOfUnits * chargesPerUnit;
let lateSurcharge = 350;
let grossAmount = netAmount + lateSurcharge;
netAmount = netAmount.toFixed(2);
grossAmount = grossAmount.toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
                            //  ==========end==========
