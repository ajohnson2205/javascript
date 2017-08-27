//More array functions

  // indexOf
    var fruits = ['apple', 'banana'];
    var applePlace = fruits.indexOf("apple"); // 0

    //Only finds the first instance of a match
    //There's an optional paramater that tells it where to start

  // forEach
    //Traditional
      //This will take each values and add one
    var ages = [53, 50, 29, 22, 16];
    for (var i = 0; i < ages.length; i++) {
      ages[i] = ages[i] + 1;
    }

    //forEach
      //Goes through items in the array one at a time and passes them into a function that we give it
      //In this example:
        //Take our ages, get the value of each item and index one at a time, and pass them into the funciton
    ages.forEach(function (val, i, arr) {
      arr[i] = val + 1;
    });
    //forEach can return to the current array, or to a new one


  // Array.map()    => puts it into a new, empty array
    //Transforms an array of values
    //Works just like a forEach except it returns the new values
    //It makes a new empty array and puts the values in there one at a time
      //The old array is untouched and unmodified
    var ages = [53, 50, 29, 22, 16];
    var ages2017 = ages2016.map(function(element) {
      return element + 1;
    });


  // Array.filter()      => puts it into a new, empty array
    //A way to pull out certain pieces of our array based on critera
    //Give it a function to test the items and it should return a boolean
    //Creates a new, empty array
      //The old array is untouched and unmodified

    var names = ["Suzie", "Ben", "Mark", "Franklin"];
    var shortNames = names.filter(function(val, i, arr) {
      return val.length < 5;
    })



/*  WELCOME TO REACT  */

  /*

  JS library for building UIs
  Uses JSX
    We can write HTML elements directly into our JS
