const preamble =
    "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";

// First we need a function that will parse our date and give us the output needed based on a certain set of arguments.

function wordCount(startLetter = "t", endLetter = "e", string) {
    // we split our text string into separate words inside an array that can be manipulated

    const wordsArray = string.toLowerCase().split(/[ ,.]+/);
    // PROBLEM
    // At first I splitted the string by spaces and realized that I wouldn't be able to compare an ending letter with a comma for example, or period, so by using a regular expression I can split the data separated by spaces, commas and periods.

    // PROBLEM
    // "e" !== "E"
    // I found very helpful to parse each word to lower case characters at first in order to make it easier to compare them later.

    // Here I loop through the array and return another array with only elements that pass a certain condition.

    const startWith = wordsArray.filter(word => {
        return word[0] === startLetter;
    });

    const endWith = wordsArray.filter(word => {
        return word[word.length - 1] === endLetter;
    });

    const startAndEndWith = wordsArray.filter(word => {
        return word[0] === startLetter && word[word.length - 1] === endLetter;
    });

    // Now ouput a number of words meeting those conditions
    console.log(
        ` --------------------------------------------------------------------------------------- \n starting with the letter (${startLetter}) we have a total of ${
            startWith.length
        } word(s). \n ${startWith}`
    );
    console.log(
        `--------------------------------------------------------------------------------------- \n  ending with the letter (${endLetter}) we have a total of ${
            endWith.length
        } word(s). \n ${endWith}`
    );
    console.log(
        `--------------------------------------------------------------------------------------- \n  starting with the letter (${startLetter}) and ending with the letter (${endLetter}) we have a total of ${
            startAndEndWith.length
        } word(s). \n ${startAndEndWith}`
    );
}
// Making our application more dynamic so the user can pass different letters as arguments to our node execution command.
const startingLetter = process.argv[2];
const endingLetter = process.argv[3];

wordCount(startingLetter, endingLetter, preamble);
