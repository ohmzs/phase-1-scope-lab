var customerName = "bob";

function upperCaseCustomerName(){
     customerName = customerName.toUpperCase();
}


// var customerName = "bob"                              //Declare a variable in global scope called customerName using the var keyword. 
// const leastFavoriteCustomer = ""

// function upperCaseCustomerName(){           //upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.
//      customerName = customerName.toUpperCase();
//  }

// function setBestCustomer(){                     //setBestCustomer(): Write a function that when called, declares a variable 
//      bestCustomer = "not bob";                  //called bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.)
//           return window.bestCustomer;    // Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
// }

// function overwriteBestCustomer(){                //`overwriteBestCustomer()`: See the consequences of declaring a variable in
//      bestCustomer = "maybe bob";                     //global scope, by writing a new function called `overwriteBestCustomer()`
//         return window.bestCustomer;                                     // that changes that `bestCustomer` variable.
// }

// function changeLeastFavoriteCustomer(){                 //leastFavoriteCustomer and changeLeastFavoriteCustomer():
//     leastFavoriteCustomer = "pedo"                  //Now declare a constant (using the const keyword)in global scope called leastFavoriteCustomer;
//         return window.leastFavoriteCustomer;                  // be sure to assign it some initial value.
// }                                                       //Finally, write a function called changeLeastFavoriteCustomer()
//                                                          //that attempts to change that constant - notice what

