// function Constructor to create Object from a blueprint
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher',

};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function (){

        console.log (2016 
            - this.yearOfBirth);
        
    }
}

Person.prototype.calculateAge = function (){

    console.log (2016 
        - this.yearOfBirth);
};

Person.prototype.lastName = 'Sanni'

var john = new Person ('john', 1990, 'teacher');
var ola = new Person ('Ola', 1992, 'programmer');
var gbenga = new Person ('gbenga', 1982, 'logistic');

john.calculateAge();
ola.calculateAge();
gbenga.calculateAge();

console.log(john.lastName  + ' john');
console.log(ola.lastName  + ' ola');
console.log(gbenga.lastName  + ' Gbenga');
*/



// Object.create Method and Inheritance

var personProto = {
    calculateAge : function(){
       console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create (personProto);
john.name = 'john';
john.age = 1992;
john.job = 'LogisticMan'


var jane = Object.create (personProto,{
    name : { value: 'jane'},
    yearOfBirth: { value : 1970 },
    job: { value : 'designer' }
});



//Primitives versus Object

//Primitive

var a = 20;
var b = a;
a = 40 ;

console.log(a);
console.log(b);

//Object

var a = {
    name : 'olanrewaju',
    age : 27,
    job : 'Web developer'
};

var b = a;
a.age = 'Designer';
console.log(a.age);
console.log (b.age);

//function

var age = 27;
var obj = {
    name : 'Olanrewaju',
    city : 'Lagos'
};

function priObjFun (a, b){
    a = 30;
    b.city = 'ibadan';
}

priObjFun (age, obj);
console.log (age);
console.log(obj.city);

//Passing function to a function as anrgument

var years = [1992, 1980, 1988, 2000, 1978]

function arrayCalc (arr, fn) {
    var arrayRes = [];
    for (var i = 0; i < arr.length; i++ ){
        arrayRes.push (fn(arr[i]));
    } 
    return arrayRes;
}

function calculateAge (el){
    return 2019 - el;  
}

function isFullAges (el){
    return el >= 20; 
}

function maxHeart (el){
    if (el >= 20 && el <= 70){
    return Math.round(209.8 - (0.82 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc (years, calculateAge);
var fullAge = arrayCalc (ages, isFullAges);
var heart = arrayCalc(ages, maxHeart);
console.log (ages);
console.log(fullAge);
console.log (heart);

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log (name + ', can you please explain wht Uxx designe is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion =interviewQuestion ('designer');
var coblerQuestion = interviewQuestion('cobler')

teacherQuestion('Mr Ajagbe');
designerQuestion('Olanrewaju');
coblerQuestion('Ajagbe kekere');




















