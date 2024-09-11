function firstWord(s) {
  // your code here
	const regex = /^\w+/;
	const check = s.match(regex);
	return check ? check[0] : "";
}
const s = prompt("Enter String:");
alert(firstWord(s));
