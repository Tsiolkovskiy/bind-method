'use strict';

// const bookings =[];

// const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
//     // numPassengers=numPassengers ||1;
//     // price = price ||199;
    
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// const flight = 'LH234';
// const jonas ={
//     name: 'Jonas Schmetdmann',
//     passport: 24739479285
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name='Mr. '+ passenger.name;

//     if (passenger.passport===24739479285){
//         alert('Checked in')
//     }else{
//         alert('Wrong credentials!')
//     }


// }

// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*1000000000);
// }
// newPassport(jonas);
// checkIn(flight,jonas);

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others]= str.split('');
//     return [first.toUpperCase(), ...others].join(' ');

// };

// const transformer = function(str,fn){
//     console.log(`Original string: ${fn(str)}`);
//     console.log(`Transformed string: ${fn(str)}`)

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5=function(){
//     console.log('✋');
// }

// document.body.addEventListener('click', high5);

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey=greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greetArr = greeting => name =>console.log(`${greeting} ${name}`);
// greet('Hello')('Jonas');


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline}
            flight ${this.iataCode}${flightNum}`);
            this.bookings.push({flight: `${this.iataCode}${flightNum}`,name});
    },
};

lufthansa.book(239,'Jonas schemdtmann');
lufthansa.book(635, 'John Smith');

const eurowings={
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings:[],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings:[]
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);
const flightData= [583,'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);



const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steven Williams');

const bookeEW23 = book.bind(eurowings,23);
bookeEW23('Artur Nurullin');
bookeEW23('Martha Stewart');

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++
    console.log(this);

    this.planes++;
    console.log(this.planes);
};


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


const addTax = (rate,value)=>value + value*rate;

console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value+value*rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));