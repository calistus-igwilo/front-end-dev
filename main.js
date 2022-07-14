/* var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} */

for (let i = 0; i < 3; i++) {
    console.log(i);
}

for (let i = 0; i <= 3; i++) {
    console.log("THis is line", i);
}

let counter = 3;
while (counter > 0) {
    console.log(counter);
    counter--;
}

let x = "";
if (x) {
    console.log("truthy")
} else {
    console.log("falsy")
}


function letterFinder(word, match) {
    let condition1 = typeof(word) == 'string' && word.length >= 2;
    let condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder("cat", "a")

let result = null;
console.log(result);


try {
    throw new Error();
    console.log("hello");
} catch (err) {
    console.log("Goodbye")
}


let str = "Hello";
let z = str.match("jello");
console.log(z)


try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}


try {
    console.log('hello)
    }
    catch (e) {
        console.log('caught')
    }