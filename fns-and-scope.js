//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
let isTyler = str => str==="Tyler"?true:false;
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
let getName = () => {
  var user = prompt()
  return user
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  let welcome = () =>{
    var user2 = cb();
    alert(`Welcome, ${user2}`)
  }



//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  /*Parameters define a function and are more general. Arguments are used to invoke a function with specific values.*/


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//False, 0 or zero, Empty Strings ('' or ""), null, undefined, NaN



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
let myName = () => "Brett"

  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName

//Now alert the result of invoking newMyName
alert(newMyName())


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
let outerFn = () => {
  return function(){
    return "Brett"}
}


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
 var innerFn = outerFn();

//Now invoke innerFn.
