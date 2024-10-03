// Chapter17 to 20

// Question1

// var multiArr = [[]]

// console.log(multiArr)

// Question2

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(matrix)

// Question3

// for(var i = 1;i<=10;i++){
//     console.log(i)
// }

// Question4

// var number = parseInt(prompt("Enter any number"));
// var length = parseInt(prompt("Enter the length of the table"))

// for(var i = 1;i<=length;i++){
//     console.log(`${number} * ${i} = ${ number * i}`)
// }

// Question5

// var fruitNames = ["Banana","Apple","Grapes","Mango","Pineapple"]
// for(var i = 0;i<fruitNames.length;i++){
//     console.log(fruitNames[i])
// }

// Question6

// a. Counting: 1 to 15
// var counting = [];
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// document.write("Counting:", counting.join(", "));

// b. Reverse counting: 10 to 1
// var reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// document.write("<br>Reverse counting: ", reverseCounting.join(", "));

// c. Even: 0 to 20
// var even = [];
// for (let i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// document.write("<br>Even: ", even.join(", "));

// d. Odd: 1 to 19
// var odd = [];
// for (let i = 1; i < 20; i += 2) {
//     odd.push(i);
// }
// document.write("<br>Odd: ", odd.join(", "));

// e. Series: 2k to 20k
// var series = [];
// for (let i = 1; i <= 10; i++) {
//     series.push(i * 2 + 'k');
// }
// document.write("<br>Series: ", series.join(", "));

// Question7

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// var searchItems = prompt("Enter item what you search")

// if(bakeryItems.includes(searchItems)){
//     console.log(`${searchItems} is found in the list.`);
// } else {
//     console.log(`${searchItems} is not found in the list.`);
// }

// Question8

// var A = [24, 53, 78, 91, 12];

// var largest = A[0]; 
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number is:", largest);

// Question9

// const A = [24, 53, 78, 91, 12];

// let smallest = A[0]; 
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number is:", smallest);

// Question10

// for(var i = 1;i<=100;i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

// Chapter21 to 35

// Question1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter your Last Name");
// var full_name = firstName + " " + lastName

// alert("Welcome " +full_name + "!")

// Question2

// var userInput = prompt("What's your favourite Mobile Phone Model?")
// var length = userInput.length
// for (var i = 0;i<length;++i){
//     console.log(length[i])
// }

// Question3

// var word = "Pakistani"
// var index = word.indexOf("n")
// document.write("The index number of n in Pakistani is "+ index)

// Question4

// var lastIndex = "Hello World"
// var work = lastIndex.lastIndexOf("l")
// document.write("The index of l is "+work)

// Question5

// var word = "Pakistani"
// var character = word.indexOf("k")
// console.log(character)

// Question6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var full_name = firstName+lastName
// console.log("Hello "+full_name+"!")

// Question7

// var city = "Hyderabad"
// var replaceWord = city.replace("Hyder","Islam")
// document.write(replaceWord
// )

// Question8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.replace(/and/g,"&");
// document.write(modifiedMessage);

// Question9

// var stringValue = "472";
// var numberValue = Number(stringValue);
// document.write(numberValue);

// Question10

// var input = "peacock"
// var uppercaseInput = input.toUpperCase("peacock")
// document.write(uppercaseInput)

// Question11

// var input = prompt("ENter any sentence");
// var title_case_output = input.toUpperCase();
// document.write(title_case_output)
 
// Question12

// var num = 35.36;
// var numString = num.toString().replace('.', '');
// document.write(numString)

// Question13

// Question14

// Question15

// Question16

// var university = "University of Karachi";
// var universityArray = university.split('  ');
// document.write(universityArray)

// Question17

// var userInput = prompt("ENter your data");
// if (userInput.length > 0) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("last letter is "+ lastCharacter)
// }
// else{
//     document.write("This is not "+lastCharacter)
// }

// Question18

// var str = "The quick brown fox jumps over the lazy dog";
// var words = str.toLowerCase().split(' ');
// var count = words.filter(word => word === 'the').length;
// document.write(count)

// Chapter26 to 30

// Question1

// var number = 3.56;
// var roundedValue = Math.round(number);
// document.write(roundedValue)
// var floorValue = Math.floor(number);
// document.write(floorValue)
// var ceilValue = Math.ceil(number);
// document.write(ceilValue)

// Question2

// var number = -3.56;
// var roundedValue = Math.round(number);
// document.write(roundedValue)
// var floorValue = Math.floor(number);
// document.write(floorValue)
// var ceilValue = Math.ceil(number);
// document.write(ceilValue)

// Question3

// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput);
// var result = Math.abs(number);
// console.log(`The absolute value of ${number} is ${result}.`);

// Question4

// const diceValue = Math.floor(Math.random() * 6) + 1;

// document.write(diceValue)

// Question5

// var headUser = prompt("Enter head username");

// var tailUser = prompt("Enter tail username");

// var toss = Math.floor(Math.random() * 6 + 1);

// console.log(toss);

// if (toss === 0) {
//   alert(headUser + "win the toss");
// } else {
//   alert(tailUser + "win the toss");
// }

// Question6

// var randomNum = Math.random()*100+1;

// document.write(randomNum)

// Question7

// var userWeight = prompt("Enter your weight");

// document.write("The weight of users is "+userWeight+ "Kilograms")

// Question8

// var floorValue = [1,2,3,4,5,6,7,8,9,10];
// var userInput = prompt("Write a number")
// if (userInput=floorValue){
// alert("Congratulation! You wrote our secret number")
// }
// else{
//     alert("You didn't write our secret number")
// }