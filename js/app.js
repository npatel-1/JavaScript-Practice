//    VARIABLES AND DATA TYPES
//    variables can containe letters, numbers, underscores, dollar signs
//    they should begin with a letter
//    can also start with _ or $
//    they are case sensitive
// var number1 = 35;
// var number2 = 40;

// var number1 = '35';
// var number2 = '40';

//    adds two numbers together if the numbers are not a string. If the numbers are string, it will just side by side.
// alert(number1 + number2);
//    combines a string with variable
// alert('My favorite number is '+number1);

// var test = 'This is a test';
// var Test = 'This is another test';
//
// alert(Test);

//    camel case
// var myFavouriteNumber;
//    don't have to use a var here as it is already initialized
// myFavouriteNumber = 5;
//    partial case
// myFavouriteNumber;

//    underscore
// var my_favourite_number;

//    ARRAYS
//    used to store multiple values in a single variable.
//    they are 0 based, so they start with 0 then 1 then 2 etc. in this case red is 0, blue is 1 and green is 2.
// var colors = ['red', 'blue', 'green'];
//    or you could do
// var colors = new Array('red', 'blue', 'orange');
//    this will display all values in the array
// alert(colors);
//    this will displa blue
// alert(colors[1]);
//    this will add on to the values in the array
// alert(colors) = 'green';
//    or you could do
// colors.push('purple');
//    this will display purple because we added purple and it is number 3 in the array
// alert(colors[3]);
 // var numbers = [5,77,6,'seven',15,55];
//    length displays the amount of values in an array
 // alert(numbers.length);
 //   a method as 2 brackets after it
 //   sort will arrange the values in an array in order
 // alert(numbers.sort());
 //   revers will display the values in an array from end to beginning
 // alert(numbers.reverse());
//    LOOPS
//    in the console, i will start from 0 and will add 1(i++) untill it reaches 9
//    for loop
// for(var i = 0; i < 10; i++){
//    this will display it to 10 because we made i less or equal to 10
// for(var i = 0; i <= 10; i++){
//   console.log('I love the number '+i);
// }
//    while loop
//displays 0 to 9
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//    forEach loop
//displays each value in an array on a new line
// var numbers = [33,54,76,34,2,6];
// numbers.forEach(function(number){
//   console.log(number);
// });
//using for loops with an array will also display each value in a new line
// var numbers = [33,54,76,34,2,6];
// reverse will display each value on a new line but from end values till start
// numbers.reverse();
// for(var i = 0;i < numbers.length;i++){
//   console.log(numbers[i]);
// }

//    CONDITIONALS
// 1 equals is aissigning 1 to a variable or element for example
// 2 equals is comparing
// 3 equals comparing but the 2 data sets have to match
// this is not the same because one is a integer and the other is string
// if(1 == '1'){
// the console will display this is true as they both match
// if(1 == 1){
//   console.log('this is true');
// }
// this will give nothing in the console
// if(1 == 2){
//   console.log('this is true');
// }
// var var1 = 3;
// var var2 = 4;
// ! is to test if its not true (it flips the value)
// if(var1 != var2){
//   console.log('this is true');
// }
// as the values do not match, it will ignore the if statement and read the else statement to show that it is false
// var var1 = 3;
// var var2 = 4;
// && means AND, so var1 == var2 has to be true along with var1 == 3
// var var1 = 3;
// var var2 = 4;

// if(var1 == var2 && var1 == 3){
//   console.log('this is true');
// } else console.log ('this is false')
// || means OR
// if(var1 == var2 || var1 == 3){
//   console.log('this is true');
// } else console.log ('this is false')
// as grapes is not listed, it will read out the default
// var fruit = 'grapes';
//
// switch(fruit){
//   case "banana":
//     alert('I hate bananas')
//     break;
//   case "apple":
//     alert('I love apples');
//     break;
//   case "orange":
//     alert('Oranges is OK');
//     break;
//   default:
//     alert('I love all other fruits');
//     break;
// }
//    OBJECTS
// Object literal
//objects use {}
// var person = {
//     firstName: 'Neil',
//     lastName: 'Patel',
//     age: 21,
//     children: ['Brianna', 'Nicholas'],
//     address: {
//       street: '555 Something at',
//       city: 'London',
//       country: 'England'
//     },
//     fullName: function(){
      // this referes to the current object it is in. So for instance it will be person
//       return this.firstName + " "+this.lastName;
//     }
// }
//
// console.log(person.fullName());

//Object Constructor

// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';
// apple.describe = function(){
//   return 'An apple is the color '+this.color+' and is the shape '+this.shape;
// }
// describe is the function
// console.log(apple.describe());

// function Fruit(name, color, shape){
//   this.name = name;
//   this.color = color;
//   this.shape = shape;
//
//   this.describe = function(){
//     return 'A '+this.name+' is the color ' +this.color+ ' and is the shape'+this.shape;
//   }
//
// }

// var apple = new Fruit('apple', 'red', 'round');
// var melon = new Fruit('melon', 'green', 'round');
// this will display round in the console
// console.log(melon.shape);
// console.log(melon.describe());

// var users = [
//   {
//     name: 'Neil Patel',
//     age: 21
//   },
//   {
//     name: 'Peter Parkar',
//     age: 16
//   },
//   {
//     name: 'Shelly Williams',
//     age: 30
//   }
// ];
// this will display the name and age of the first person.
// console.log(users[0]);
// this will make it more specific and only display the name only
// console.log(users[0].name);

//    EVENTS
// this will changed the heading when the button is clicked.
// function changeText(){
//   var heading = document.getElementById('heading');
//   heading.innerHTML = 'You Clicked!';
// }
// function showDate(){
//   var time = document.getElementById('time');
//   time.innerHTML = Date();
// }
//
// function clearDate(){
//   var time = document.getElementById('time');
//   time.innerHTML = '';
// }

//    FORMS
// function changeBackground(x){
//   console.log(x.value);
//   var body = document.getElementById('body');
//   body.style.backgroundColor = x.value;
// }
// function changeBackground(x){
//   console.log(x.value);
//   var heading = document.getElementById('heading');
//   heading.style.color = x.value;
// }

// function validateForm(){
//   var firstName = document.forms["myForm"]["firstName"].value;
// if the
  // if(firstName == null || firstName == ""){
  //   alert("First Name is required");
  //   return false;
  // }
// if the characters is below 3 then an alert will pop up
//   if(firstName.length < 3){
//     alert("First Name must be at least 3 characters");
//     return false;
//   }
// }
