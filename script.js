function firstWord(s) {
  // your code here
	let trimed=s.trim();
	let ind=trimed.indexOf(' ');
	if(ind==-1) return trimed;
	return trimed.substring(0,ind+1);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
