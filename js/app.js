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
var colors = new Array('red', 'blue', 'orange');
//    this will display all values in the array
// alert(colors);
//    this will displa blue
// alert(colors[1]);
//    this will add on to the values in the array
// alert(colors) = 'green';
//    or you could do
colors.push('purple');
//    this will display purple because we added purple and it is number 3 in the array
alert(colors[3]);
