function trailingZeros(n) {
  //your JS code here. If required.
	let factorial = 1
	for(i=n;i>0;i--){
		factorial *= i
	}
	let count = -1
	while(Number.isInteger(factorial)){
		factorial = factorial/10;
		count++;
	}
	return count;
}
const input = prompt("Enter a number");
alert(trailingZeros(input));
