// 0 - не починав
// 1 - в процесі
// 2 - не ясно
// 3 - розібрався

const QUESTIONS = [
	{
		question: "Explain event delegation.",
		url: "https://learn.jquery.com/events/event-delegation/",
		status: 0,
	},
	{
		question: "Explain how 'this' works in JavaScript.",
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
		status: 0,
	},
	{
		question:
			"Can you give an example of one of the ways that working with this has changed in ES6?",
		url: "",
		status: 0,
	},
	{
		question: "Explain how prototypal inheritance works.",
		url: "",
		status: 0,
	},
	{
		question:
			"What's the difference between a variable that is: null, undefined or undeclared?",
		url: "",
		status: 0,
	},
	{
		question: "What is a closure, and how/why would you use one?",
		url: "",
		status: 0,
	},
	{
		question:
			"What language constructions do you use for iterating over object properties and array items?",
		url: "",
		status: 0,
	},
	{
		question:
			"Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?",
		url: "",
		status: 0,
	},
	{
		question: "What's a typical use case for anonymous functions?",
		url: "",
		status: 0,
	},
];

export { QUESTIONS };
// localStorage.setItem(data, data);

// if (localStorage.getItem('data')) {
//     <List list={localStorage.getItem('data')} />
// } else {
//     <List list={data} />
// }
