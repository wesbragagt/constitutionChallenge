// count words starting with t and ending with e
// Functional way using a compose function
/*
"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
*/

const pipe = (...functions) => value => functions.reduce((arg, fn) => fn(arg), value)

const constitution =
	'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.'

// split the string into an array of sentences
const splitSentence = text => text.split(',')
// lower case, trim each sentence and remove periods .
const parseSentence = sentence =>
	sentence.map(e =>
		e
			.trim()
			.toLowerCase()
			.replace(/\./g, '')
	)

const splitIntoArrayOfWords = arr => arr.map(e => e.split(' ')).reduce((a, b) => a.concat(b), [])

const allWords = pipe(splitSentence, parseSentence, splitIntoArrayOfWords)(constitution)

const countWordsStarting = start => input => input.filter(e => e.charAt(0) === start.toLowerCase())

const countWordsEnding = end => input => input.filter(e => e.charAt(e.length - 1) === end.toLowerCase())

const printCount = (start, end) => {
	const countLetterStart = countWordsStarting(start)(allWords).length
	const countLetterEnd = countWordsEnding(end)(allWords).length
	console.log(`starting with ${start} = ${countLetterStart} words.`)
	console.log(`ending with ${end} = ${countLetterEnd} words.`)
}

printCount(process.argv[2], process.argv[3])
