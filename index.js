const preamble =
    "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";

// First we need a function that will parse our date and give us the output needed based on a certain set of arguments.

function wordCount(startLetter, endLetter, string) {
    // we split our text string into seperate words inside an array that can be manipulated

    const wordsArray = string.toLowerCase().split(/[ ,.]+/);
    console.log(wordsArray);
}