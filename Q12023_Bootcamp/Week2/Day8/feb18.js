console.log(2+2);
console.log('2+2');
console.log('Hello JS');
console.log(true);
console.log(typeof 'true');
console.log(typeof true);
console.log('true');
// alert('Arghhhhh!!!!!');

const currentYear=2023;
let birthYear=2022;
let age=currentYear-birthYear;
console.log(age);

birthYear=1992;
age=currentYear-birthYear;
console.log(age);

let stuName;
stuName='John Doe';
console.log(stuName);
// '=' means assign not equal

console.log(age='1');
console.log(1+'1');

let stuEmail;
console.log(typeof stuEmail);

console.log(stuName, 'is', currentYear-birthYear, 'years old student');

console.log(stuName, 'is '+ (currentYear-birthYear), 'years old student');

birthYear=prompt("Enter your birth year");
age=currentYear-birthYear;
console.log('You are',age, 'years old.');


if(currentYear-birthYear>24) {
  console.log('You are eligible')
}
else {
  console.log('Sorry, you are ineligible for our program.')
};

console.log(age=age+2)
console.log(age+=2)
console.log(age-=1)

document.querySelector('h1').textContent='Order something from here';
let userOrder;
document.querySelector('button').addEventListener('click', 
function(){
userOrder=prompt('What do you want to order');document.querySelector('h1').textContent=userOrder;
document.querySelector('h1').style.backgroundColor='yellow';

});