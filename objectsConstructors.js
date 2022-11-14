//Experiment NO4 
const identity = {
    Name: "Pratik Patil",
    Age : 20,
    Gender : "Male"
};

document.getElementById("print1").innerHTML = `${identity.Name} is a ${identity.Gender} of ${identity.Age} years!`


//constructor function

class person{
    constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender; 
}
     display() {
        return `${this.name} is ${this.age}`;
    }

}

const person1 = new person("Aman",19,"Male");


document.getElementById("print2").innerHTML = `${person1.name} is ${person1.age} years old and is a ${person1.gender}`;

//Arrow functions cannot be used to write object methods because, as you have found, since arrow functions close over the this of the lexically enclosing context, the this within the arrow is the one that was current where you defined the object.

function Person(name,age,gender){
    this.name = name;
    this.age =age;
    this.gender = gender;
}

const person2 = new Person("Dhoni",30,"Male");
document.getElementById("print3").innerHTML = `${person2.name} is ${person2.age} years old and is a ${person2.gender}`;

//Class student is the child class of class person and hence explains Inheritance in javascript
class student extends person{
    constructor(name,age,gender,rollno,div){
        super(name,age,gender);
        this.rollno = rollno;
        this.div = div;
    }

    display() {
        return `${this.name} is ${this.age} years old from ${this.div}`;
    }
}

const student1 = new student("Pratik" , 20 , "Male" , 51 , "D15A");

//Here the method 'display()' is overrided
document.getElementById("print4").innerHTML = student1.display();


//Generate an exception when erroneous data is enter eg: if roll no entered is zero)

function checkError(){
    const value = document.getElementById("error_checking").value;
    console.log(value);
    if (isNaN(value) || value == 0) {
    throw new Error("Invalid Input ");
    } 
    else {
    console.log("Valid");
    }
}
    

