
// // Utilities:small helper we reuse in our code
// function greet(name) {
//     return `Hello,  ${name}!`;
// }
// console.log(greet("Bruce Wayne"));

// // DOM: This how we Interact with the Html & Css In Javascript
// // document.getElementById("add-note-btn").textContent = "Add Note";

// let name = "Alice";
// let age = 25;

// // Old way
// let msg1 = "My name is " + name + " and I'm " + age + " years old.";

// // Template literal
// let msg2 = `My name is ${name} and I'm ${age} years old.`;

// // Any expression works inside ${}:
// console.log(`Next year I'll be ${age + 1}`);  // "Next year I'll be 26"
// console.log(`Uppercase: ${name.toUpperCase()}`); // "Uppercase: ALICE"
// console.log(`Is adult: ${age >= 18}`); // "Is adult: true"

// // Variable: This is used to store data in Javascript
// let name = "John Doe";
// let age = 25;
// let isStudent = true;
// let text = "Hello Word";
// let person = { name: "James", age: 25, isStudent: true };
// let notes = ["Note 1", "Note 2", "Note 3"];
// let number = 42;

// // EventListeners: This how we react to user 



// // Object: This is used to store data in Javascript || a Collection of related data
// let student = {
//     name: "James",
//     subject: "Software Development",
//     grade: 8,
// }


// Datatypes:
// String,boolean, null, undefined, number, object, floar

// let grade = "A";

// if (grade === "A") {
//     console.log("You have passed the course");
// } else {
//     console.log("You have failed the course");
// }

// Loops
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }



// Utilities - get time based greeting

function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}
// console.log(getGreeting());



// Utilities convert numeric grade to letter grade

function getGradeLetter(grade) {
    if (grade >= 90) {
        return { letter: "A", css: "grade-a" };
    } else if (grade >= 80) {
        return { letter: "B", css: "grade-b" };
    } else if (grade >= 70) {
        return { letter: "C", css: "grade-c" };
    } else if (grade >= 60) {
        return { letter: "D", css: "grade-d" };
    } else {
        return { letter: "F", css: "grade-f" };
    }
}

// Student data Object

const student = {
    name: "Ines",
    class: "Level 3 Software Development",
    year: 2026
}


// Updating The DOM's With Student

function initHomePage() {
    // Update name In Hero Page
    const nameEl = document.getElementById("student-name")
    if (nameEl) {
        nameEl.textContent = `${student.name}`;
    }

    // Update greeting If Element exist
    const greetEl = document.getElementById("greeting");
    if (greetEl) {
        greetEl.textContent = `${getGreeting()}, ${student.name}!`;
    }

}

document.addEventListener("DOMContentLoaded", initHomePage);

// Methods

// Regular function
function greet() {
    console.log("Hello");
}

// Method — function inside an object
const person = {
    name: "Ketty",
    greet: function () {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet();  // "Hello, I'm Ketty"