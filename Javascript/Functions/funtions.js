//funciton is a set of statement that performs a task or calculate a value


function greet(){
    console.log('hello world ');

}

greet();


//functions can have input and these can change how the funtions behaves
//instead of world in above code if we want to print any name then

function greet(name){
    console.log('hello '+  name);

}

greet("Rahul");
greet("Sharma");

//In this code Rahul is augument to the greet funtion and name is the parameter of greet function

// PARAMETER is a value which passed at the time of declaration 
//ARGUMENT is the the actual value that is a supply for that parameter


// MULTIPLE Parameters

function greet(nameOne, nameTwo){
    console.log('hello '+  nameOne + ' ' + nameTwo);

}

greet("Rahul" , "Eklavya");
greet("Sharma");

// ---------------------------------------------------------------------------------------
//performing a task

// calculating value 
function square(number){
    return number*number;
}

console.log(square(8));
