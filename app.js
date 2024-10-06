
// Chapter 6 to 9

// Q1
// var num = 10
// document.write("<h1>"+"value :" +num+"</h1><hr>")
// ++num
// document.write("<h1>"+"before value :" +num+"</h1>")
// document.write("<h1>"+"after value :" +num+"</h1><hr>")
// num++
// document.write("<h1>"+"before value :" +num+"</h1>")
// document.write("<h1>"+"after value :" +num+"</h1><hr>")
// --num
// document.write("<h1>"+"before value :" +num+"</h1>")
// document.write("<h1>"+"after value :" +num+"</h1><hr>")
// num--
// document.write("<h1>"+"before value :" +num+"</h1>")
// document.write("<h1>"+"after value :" +num+"</h1><hr>")

// Q2
// var a = 2
// var b = 1
// document.write("<h1>"+"a = "+a+"</h1><br>")
// document.write("<h1>"+"b = "+b+"</h1><br>")

// --a;
// a - --b;
// a - b + ++b;
// a - b + b + b--;
// document.write("<h1>"+"Result = "+a+", "+b+"</h1>")
// console.log(a, b);

// Q3
// var userName = prompt("Enter your name:");
// document.write("<h1>"+"Hello Welcome  "+"<q>"+ userName +"</q>"+ " to our webpage"+"</h1>");

// Q4
// var tableNumberByUser = prompt("Which Table you want please type numerics only");

// for (var i = 1; i<= 10; i++ ) {
    
//     document.write(+tableNumberByUser+" x " + i +" = "+ + tableNumberByUser * i +"<br>")
// }

// Q5
// var sub1 = prompt("Please write how much marks you gain in English");
// var sub2 = prompt("Please write how much marks you gain in Urdu");
// var sub3 = prompt("Please write how much marks you gain in Computer Science");

// var eachsubMarks = 100;
// var heading = "<h1>"+"Subject Total Marks Obtained Marks Percentage"+"</h1>";
// document.write(heading);
// // for English
// var subName1 = "English";
// var engMarks = sub1 / eachsubMarks * 100;
// document.write("<h1>"+subName1+" | "+eachsubMarks+" | "+sub1+" | "+engMarks+"%"+"</h1><br>");
// // for Urdu
// var subName2 = "Urdu";
// var urduMarks = sub2 / eachsubMarks * 100;
// document.write("<h1>"+subName2+" | "+eachsubMarks+" | "+sub2+" | "+urduMarks+"%"+"</h1><br>"); 
// // for Computer Science
// var subName3 = "Computer Science";
// var csMarks = sub3 / eachsubMarks * 100;
// document.write("<h1>"+subName3+" | "+eachsubMarks+" | "+sub3+" | "+csMarks+"%"+"</h1><br>");

// // Total
// var total = "Total Marks and Percentage";
// var totalMarksForAllSub = eachsubMarks * 3;
// var totalMarksGain = +sub1 + +sub2 + +sub3;
// var overAllMarks = totalMarksGain / totalMarksForAllSub * 100;

// document.write("<h1>"+"Total Percentage "+totalMarksForAllSub+" | "+totalMarksGain+" | "+overAllMarks+"%"+"</h1><br>");



 // Chapter 9-11


        // Q1

        // var City = prompt("Enter City Name");
        // if(City==="Karachi")
        // {
        //     alert("Welcome to the City of Lights");
        // }
        // else
        // {
        //     alert("Welcome to "+City)
        // }

        // Q2

        // var Gender = prompt("Enter Gender","Gender")

        // if(Gender == "Male" || Gender == "male" || Gender == "M" || Gender == "m")
        // {
        //     alert("Good Morning Sir.")
        // }
        // else if(Gender == "Female" || Gender == "female" || Gender == "F" || Gender == "f")
        // {
        //     alert("Good Morning Ma'am.")
        // }
        // else
        // {
        //     alert("Good Morning.")
        // }

        // Q3

        // var SignalColour = prompt("Enter Signal Colour","Signal Colour")

        // if(SignalColour == "Red" || SignalColour == "red")
        // {
        //     alert("Must Stop")
        // }
        // else if(SignalColour == "Yellow" || SignalColour == "yellow")
        // {
        //     alert("Ready to Move")
        // }
        // else if(SignalColour == "Green" || SignalColour == "green")
        // {
        //     alert("Must Move")
        // }
        // else
        // {
        //     alert("Invalid Signal Colour")
        // }


        // Q4

        // var currFuel = prompt("Enter Remaining Fuel in your car","In Litres")

        // if(currFuel<0.25)
        // {
        //     alert("Please refill the fuel in your car.")
        // }
        // else if(currFuel=>0.25)
        // {
        //     alert("There is enough fuel to drive.")
        // }
        // else
        // {
        //     alert("Invalid Entry")
        // }

        // Q5

        // var a = 4;
        // if(++a === 5)
        // {
        //     alert("given condition for variable a is true");
        // }
        // else
        // {
        //     alert("false")
        // }

        // var b = 82;
        // if (b++ === 83)
        // {
        //     alert("given condition for variable b is true");
        // }
        // else
        // {
        //     alert("false")
        // }

        // var c = 12;
        // if (c++ === 13)
        // {
        //     alert("condition 1 is true");
        // }
        // if (c === 13)
        // {
        //     alert("condition 2 is true");
        // }
        // if (++c < 14)
        // {
        //     alert("condition 3 is true");
        // }
        // if(c === 14)
        // {
        //     alert("condition 4 is true");
        // }

        // var materialCost = 20000;
        // var laborCost = 2000;
        // var totalCost = materialCost + laborCost;
        // if (totalCost === laborCost + materialCost){
        // alert("The cost equals");


        // Q6

        // var EngMarks = +prompt("Marks in English?"),
        // SciMarks = +prompt("Marks in Science?"),
        // MathMarks = +prompt("Marks in Math?"),
        // TotalMarks = +prompt("Total Marks"),
        // Percentage=((EngMarks+SciMarks+MathMarks)/TotalMarks)*100,
        // Grade,Remarks;

        // if(Percentage >= 80)
        // {
        //     Grade="A+";
        //     Remarks="Excellent";
        // }
        // else if(Percentage >= 70)
        // {
        //     Grade="A";
        //     Remarks="Good";
        // }
        // else if(Percentage >= 60)
        // {
        //     Grade="B";
        //     Remarks="You need to Improve";
        // }
        // else if(Percentage < 60)
        // {
        //     Grade="Fail";
        //     Remarks="Sorry";
        // }
        // else
        // {
        //     Grade="Invalid";
        //     Remarks="Invalid";
        // }

        //document.write("<h1>Marks Sheet</h1></br></br>Total Marks : "+TotalMarks+"</br>Marks Obtained : "+(EngMarks+SciMarks+MathMarks)+"</br>Percentage : "+Percentage+"%</br>Grade : "+Grade+"</br>Remarks : "+Remarks);

        // Q7

        // var Num = 7;
        // var inputNum = +prompt("Guess a Number Between 1-10")

        // if(Num === inputNum)
        // {
        //     alert("Bingo! Correct Answer.")
        // }
        // else if (Num === (inputNum+1) || Num === (inputNum-1))
        // {
        //     alert("Close enough to the Correct Answer.")
        // }
        // else
        // {
        //     alert("Incorrect Guess.")
        // }


        // Q8


        // var InputNum = +prompt("Enter a Number divisible by 3")
        // if(InputNum%3 === 0)
        // {
        //     alert("this number is divisible by 3")
        // }
        // else
        // {
        //     alert("this number is not divisible by 3")
        // }


        // Q 9

        // var InputNum = +prompt("Enter a Number")
        // if(InputNum%2 === 0)
        // {
        //     alert(InputNum+" is an even number.")
        // }
        // else
        // {
        //     alert(InputNum+" is an odd number.")
        // }


        //Q 10

        // var inputTemp=+prompt("Enter Tempreture");

        // if(inputTemp>=40)
        // {
        //     alert("Its too hot outside.")
        // }
        // else if(inputTemp>=30)
        // {
        //     alert("The Weather today is Normal.")
        // }
        // else if(inputTemp>=20)
        // {
        //     alert("Today's Weather is Cool.")
        // }
        // else if(inputTemp>=10)
        // {
        //     alert("OMG! Today's Weather is so Cool.")
        // }
        // else if(inputTemp < 10)
        // {
        //     alert("Freeeeeez")
        // }
        // else
        // {
        //     alert("Invalid Tempreture")
        // }

        //Q 11

        // var Val1 = +prompt("Enter 1st Number");
        // var Opt = prompt("Enter Operator");
        // var Val2 = +prompt("Enter 2nd Number");
        
        
        // if(Opt == "+"){
        //     alert(Val1+Val2)
        // }
        // else if(Opt == "-")
        // {
        //     alert(Val1-Val2)
        // }
        // else if(Opt == "*")
        // {
        //     alert(Val1*Val2)
        // }
        // else if(Opt == "/")
        // {
        //     alert(Val1/Val2)
        // }
        // else
        // {
        //     alert("Incorrect Operator")
        // }

          // Chapter 12-13


        //Q1

        // var a = 1;


        //Q2

        // var Val1 = +prompt("Enter 1st Value (In Numbers)")
        // var Val2 = +prompt("Enter 2nd Value (In Numbers)")

        // if(Val1 > Val2)
        // {
        //     alert(Val1+" is Greater than "+Val2);
        // }
        // else if(Val1 < Val2)
        // {
        //     alert(Val2+" is Greater than "+Val1);
        // }
        // else if(Val1 === Val2)
        // {
        //     alert("Entered both values are equal.");
        // }
        // else
        // {
        //     alert("Invalid Value.")
        // }

        // Q3

        // var Val1 = +prompt("Enter a value (In Numbers)")

        // if(Val1 > 0)
        // {
        //     alert("Entered value is positive");
        // }
        // else if(Val1 < 0)
        // {
        //     alert("Entered value is negative");
        // }
        // else if(Val1 === 0)
        // {
        //     alert("Entered value is Zero.");
        // }
        // else
        // {
        //     alert("Invalid Value.")
        // }

        // Q4

        // var Val1 = prompt("Enter a vowel")
        // var vowels = ['a','A','e','E','i','I','o','O','u','U'];

        // if(isNaN(Val1))
        // {
        //     if(vowels.includes(Val1))
        //     {
        //         alert("Entered value is a vowel")
        //     }
        //     else
        //     {
        //         alert("Entered value is not a vowel")
        //     }
        // }
        // else
        // {
        //     alert("Entered Value is a Number");
        // }

        // Q5

        // var Pass = "Password123";

        // var inputPass = prompt("Please enter your password:");

        // if (!inputPass) 
        // {
        //     alert("Please reload and enter your password");
        // }
        // else if (inputPass === Pass)
        // {
        //     alert("Correct! The password you entered matches the original password");
        // }
        // else
        // {
        //     alert("Incorrect password");
        // }


        // Q6


        // var greeting;
        // var hour = prompt();
        // if (hour < 12)
        // {
        //     greeting = "Good day";
        // }
        // else
        // {
        //     greeting = "Good evening";
        // }
        // alert(greeting);

        // Q7

        // var inputTime = prompt("Enter Time like: 1900 = 7pm, 2000 = 8pm");

        // if(inputTime >= 0 && inputTime < 1200)
        // {
        //     alert("Good Morning")
        // }
        // else if(inputTime >= 1200 && inputTime < 1700)
        // {
        //     alert("Good Afternoon")
        // }
        // else if(inputTime >= 1700 && inputTime < 2100)
        // {
        //     alert("Good Evening")
        // }
        // else if(inputTime >= 2100 && inputTime < 2359)
        // {
        //     alert("Good Night")
        // }
        // else
        // {
        //     alert("Invalid Time")
        // }



        // Chapter 14 - 16

// Q1 / 2
// var studentName = []
// var enterYourName = prompt( "Please Enter Your Name" );
// studentName.push (enterYourName);
// console.log(studentName)
// alert("Welcome to our website "+ studentName + ". We are glad you joined us!"); 

// Q3
// fruitNames = ["apple", "banana", "orange", "grape"];

// Q4
// var numbersArray = [1, 2, 3, 4, 5];

// Q5
// var booleanArray = [true, false, true, false];

// Q6
// var mixedArray = [true, false, 10, -5, "Hello", "World"];


// Q7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul style='list-style:number'>");
// document.write("<li>" + qualifications[0] + "</li>");
// document.write("<li>" + qualifications[1] + "</li>");
// document.write("<li>" + qualifications[2] + "</li>");
// document.write("<li>" + qualifications[3] + "</li>");
// document.write("<li>" + qualifications[4] + "</li>");
// document.write("<li>" + qualifications[5] + "</li>");
// document.write("<li>" + qualifications[6] + "</li>");
// document.write("<li>" + qualifications[7] + "</li>");
// document.write("</ul>");

// Q8
// var studentNames = ["Bilal", "Usman", "Talha"];
// var scores = [420, 380, 450];

// var percentage1 = (scores[0] / 500) * 100;
// var percentage2 = (scores[1] / 500) * 100;
// var percentage3 = (scores[2] / 500) * 100;

// document.write("<h2>Student: " + studentNames[0] + "</h2>");
// document.write("Score: " + scores[0] + " out of 500<br>");
// document.write("Percentage: " + percentage1.toFixed(2) + "%<br><br>");

// document.write("<h2>Student: " + studentNames[1] + "</h2>");
// document.write("Score: " + scores[1] + " out of 500<br>");
// document.write("Percentage: " + percentage2.toFixed(2) + "%<br><br>");

// document.write("<h2>Student: " + studentNames[2] + "</h2>");
// document.write("Score: " + scores[2] + " out of 500<br>");
// document.write("Percentage: " + percentage3.toFixed(2) + "%<br><br>");

// Q9
// var colors = ["Red", "Green", "Blue"];

// document.write("<h3>Original Array:</h3>"); // Display the original array
// document.write(colors.join(", ") + "<br>");


// var colorToAddStart = prompt("Enter a color to add to the beginning:"); // a. Add color to the beginning
// colors.unshift(colorToAddStart);


// document.write("<h3>Array after adding color to the beginning:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var colorToAddEnd = prompt("Enter a color to add to the end:"); // b. Add color to the end
// colors.push(colorToAddEnd);


// document.write("<h3>Array after adding color to the end:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.unshift("Yellow", "Orange"); // c. Add two more colors to the beginning


// document.write("<h3>Array after adding two more colors to the beginning:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.shift(); // d. Delete the first color


// document.write("<h3>Array after deleting the first color:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.pop(); // e. Delete the last color


// document.write("<h3>Array after deleting the last color:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var indexToAdd = prompt("Enter the index to add a color:"); // f. Add color at desired position
// var colorToAdd = prompt("Enter the color name:");
// colors.splice(indexToAdd, 0, colorToAdd);


// document.write("<h3>Array after adding color at desired position:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var indexToDelete = prompt("Enter the index to delete color(s):"); // g. Delete color(s) from user-defined position/index
// var numToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numToDelete);


// document.write("<h3>Array after deleting color(s) from desired position:</h3>"); //Display the updated array
// document.write(colors.join(", ") + "<br>");

// Q10
// var studentScores = [85, 67, 92, 78, 60, 88];

// document.write("<h2>Original Scores:</h2>");
// document.write(studentScores.join(", ") + "<br>");
// studentScores.sort();
// document.write("<h2>Scores Sorted in Ascending Order:</h2>");
// document.write(studentScores.join(", "));

// Q11
// var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
// var selectedCities = [];

// selectedCities.push(cities[0]);
// selectedCities.push(cities[1]);
// selectedCities.push(cities[2]);

// document.write("<h2>Selected Cities:</h2>");
// document.write(selectedCities.join(", "));


// Q12 
// var arr = ["This", "is", "my", "cat"];
// var combinedString = arr.join(" ");

// document.write("<h2>Combined String:</h2>");
// document.write(combinedString);

// Create a new array to store values

// Q13
// var deviceQueue = [];

// deviceQueue.push("keyboard");
// deviceQueue.push("mouse");
// deviceQueue.push("printer");
// deviceQueue.push("monitor");

// var firstDevice = deviceQueue.shift();
// var secondDevice = deviceQueue.shift();
// var thirdDevice = deviceQueue.shift();
// var fourthDevice = deviceQueue.shift();

// document.write("<h2>Devices Stored in FIFO Order:</h2>");
// document.write("First Device: " + firstDevice + "<br>");
// document.write("Second Device: " + secondDevice + "<br>");
// document.write("Third Device: " + thirdDevice + "<br>");
// document.write("Fourth Device: " + fourthDevice + "<br>");

// Q14
// var lifoArray = [];

// lifoArray.unshift("keyboard");
// lifoArray.unshift("mouse");
// lifoArray.unshift("printer");
// lifoArray.unshift("monitor");

// var lastDevice = lifoArray.shift();
// var secondLastDevice = lifoArray.shift();
// var thirdLastDevice = lifoArray.shift();
// var fourthLastDevice = lifoArray.shift();

// document.write("<h2>Devices Stored in LIFO Order:</h2>");
// document.write("Last Device: " + lastDevice + "<br>");
// document.write("Second Last Device: " + secondLastDevice + "<br>");
// document.write("Third Last Device: " + thirdLastDevice + "<br>");
// document.write("Fourth Last Device: " + fourthLastDevice + "<br>");

// Q15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option value='' disabled selected>Select Manufacturer</option>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");



//Chapter 17 to 20


        // Q1
// var arr1 = ["wajahat", "usman", "talha"]
// var arr2 = ["wajahat2", "usman2", "talha2"]
// var arr3 = ["wajahat3", "usman3", "talha3"]
// var multiDi = [arr1, arr2, arr3]

// Q2
// var arr = [0,1,2,3]
// var arr2 = [1,0,1,2]
// var arr3 = [2,1,0,1]
// var arrMultiDi = [arr, arr2, arr3]

// for (var i = 0; i < arrMultiDi.length; i++) {

// for(var j = i ; j <= i ; j++) {
//     document.write( arrMultiDi[j] + "<br>")
// }

// }

//Q3
// for (var i=1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// Q4
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var flag = false ;
// var userInput = prompt("Enter a number");
// var userTableLength = prompt("Enter your table length")
// for (var i = 1; i <= alphabet.length; i++) {
//    if (alphabet[i] === userInput.toLowerCase()) {
//     document.write("not a number");
//     flag = true
//     break;
//    }
//    else {
//    flag = false;
        
//     }
// }
// if (!flag){
// for (let i = 1; i <= userTableLength; i++) {
//     document.write(`${userInput} x ${i} = ${userInput*i} <br>`);
    
// }
// }

// Q5
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]} </br>`)
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is  ${fruits[i]}</br>`);
// }

// Q6
// document.write(`Counting : `)
// for(var i = 1; i <= 15; i++)   {
//     document.write(`${i}, `);
// }

// document.write(`<hr/><br>`);

// document.write(`Reverse counting : `)
// for(var i = 10; i >= 1; i--)   {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Even : `);
// for (var i=0; i<=20; i+=2) {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Odd : `);
// for (var i=1; i<=20; i+=2) {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Series : `)
// for(var i=2; i<=20; i+=2) {
//     document.write(`${i}k, `);
// }

// document.write(`<hr/> <br>`);

// Q7
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt( "Enter a food item to search for: ");
// flag = false;
// for (var i=0; i< A.length ; i++){
//     if (userInput === A[i]){
//         document.write(`${userInput} is <b>available</b> at index ${i}`);
//         flag = true;
//         break;
//     }
// }
// if (!flag){
//     document.write(`${userInput} is not found in the list`);
// }

// Q8
// A = [24, 53, 78, 91, 12];
// B = A[0];
// for(var i=0 ; i< A.length; i++) {
//     document.write( ` ${A[i]}, &nbsp;` );
//     if(B < A[i]){
//         B = A[i];
//     }
// }
// document.write(`<br>The largest number is ${B}`)

// Q9
// A = [24, 53, 78, 91, 12];
// B = A[0];
// for(var i=0 ; i< A.length; i++) {
//     document.write( ` ${A[i]}, &nbsp;` );
//     if(B > A[i]){
//         B = A[i];
//     }
// }
// document.write(`<br>The largest number is ${B}`)

// Q10
for (var i=5; i <= 100; i+=5) {
    document.write(i+ ', &nbsp;');
}




