/*

Why do we can't use '='

Object are reference types:
*/




let Person = {
    name : "Krishna",
    age : 21,
    address : {
        city: "Banglore",
    }
}

Person2 = Person
console.log(Person2)

Person2.name = "Java"
console.log(Person)

Person.name = "Cpp"
console.log(Person2)

// Changing value through any of object affect value of other object too.


//     FIRST WAY

Person3 = {...Person}
console.log(Person3)

Person3.name = "Python"
console.log(Person)
// Here original object didnt get affect.


//      SECOND WAY
Person4 = Object.assign({}, Person);
Person4.name = "Four"
console.log(Person)



//       THIRD WAY

Person5 = JSON.parse(JSON.stringify(Person));
Person5.name = "Five"
console.log(Person)

