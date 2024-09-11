function firstWord(s) {
  // your code here
	const regex = /^\w+/;
	const check = s.match( /^\w+/;);
	console.log(check[0]);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
