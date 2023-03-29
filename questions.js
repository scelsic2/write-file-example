const fruits1 = ["orange", "apple", "kiwi"]

const fruits2 = ["grape", "banana", "strawberry"]

const combined = fruits1.concat(fruits2)

console.log(combined)



const veggies1 = ["carrot", "bean"]

const veggies2 = ["squash", "onion"]

const allTheVeggies = [...veggies1, "garlic", ...veggies2]

console.log(allTheVeggies)

function sum (...nums){
    let result = 0

    for (let num of nums) {
        result += num;
    }

    return result
}

const output = sum(5, 1, 7, 15);
console.log(output);

const data = {
    name: "JD",
    age: 43
};

console.log(data.name);

// through destructuring we pull properties from the object and at the same time create a variable

const { userName: mySpecialName } = {
    userName: "JD",
    age: 43
}

console.log(mySpecialName);

const [first, second] = ["pear", "orange", "grape"]
console.log(first)

function myFunc(obj){
    console.log(obj)
}

// myFunc({cool: true, num: 5}, 10, "some string")

// function myFunc([{cool}]){
//     console.log(cool)
// }

// myFunc({cool: true, num: 5}, 10, "some string")

const { anotherName: myName, age, info} = {
    anotherName: "Cassandra",
    age: 38,
    info: {
        hairColor: "brown"
    }
}

console.log(info)

function genLicense(type) {
    return `License Type: ${type}`;
}

const licenseType = genLicense("MIT")
console.log(licenseType)

const fs = require("fs");
// fs is file system

fs.writeFile("./data.txt", licenseType, (err) => {
// first parameter is type of the file and the next parameter is the data we want to add to the file
// third parameter is a callback function
// YOUR CALLBACK FUNCTIONS ALLOWS YOU TO DO SOMETHING ONCE YOUR FUNCTION IS DONE
    if(err) return console.log(err)
    // if you if statement only has 1 line of code, you don't have to include curly braces
    console.log("File written successfully.");
});
