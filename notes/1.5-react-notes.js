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


  // Array.map()
    //Transforms an array of values
    //Works just like a forEach except it returns the new values
    //It makes a new empty array and puts the values in there one at a time
      //The old array is untouch and unmodified
    var ages = [53, 50, 29, 22, 16];
    var ages2017 = ages2016.map(function(element) {
      return element + 1;
    });


  // Array.filter()
    //A way to pull out certain pieces of our array based on critera
    
