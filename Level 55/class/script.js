// function sayHi() {
//     console.log('Hiii');
// };

// sayHi();




// function greet(name) {
//     console.log('Hello', name);
// };

// greet('Davit');
// greet('Rati');
// greet('giorgi');
// greet('nika');
// greet('Luka');



// function info(name, lastName, age, country) {
//     console.log('Hello, my name is', name, lastName, ' i am ', age, ' years old and i live in ', country);
// };

// info('avto', 'gvaradze', 30, 'georgia');


// let name = prompt('Enter your name: '); // Davit
// function greet(name) {
//     console.log('Hello', name);
// };

// greet(name); // Davit



// function sum(x, y) {
//     console.log(x + y);
//     console.log(x - y);
//     console.log(x * y);
//     console.log(x / y);
// };

// sum(10, 20);
// sum(50, 1999);



// function greet(name) {
//     return "Hello " + name
    // console.log('Second Hello');
// };

// let user1 = greet('Daviti');
// let user2 = greet('Dachi');

// console.log(user1);
// console.log(user2);



// function isAvalibe(status) {
//     if(status) {
//         return "He's Online";
//     } else {
//         return "He's Offline";
//     };
// };

// let firstUser = isAvalibe(true);
// let secondUser = isAvalibe(false);


// console.log(firstUser);
// console.log(secondUser);




function cases(num) {
    switch(num) {
        case 1:
            return 'Num is one';
            break;
        case 2: 
            return 'Num is two';
            break;
        case 3:
            return 'Num is three';
            break
        default: 
            return 'Invalid Number';
    };
};

let first = cases(1);
let second = cases(2);
let third = cases(3);


console.log(first);
console.log(second);
console.log(third);
