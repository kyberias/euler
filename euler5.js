function euler5(n)
{
	var primes = [2,3,5,7,11,13,17,19];
	var result = 1;

	for(var i=0;i<primes.length;i++)
	{
		var prime = primes[i];
		for(var p=1;true;p++) {
			var pow = Math.pow(prime,p);
			if(pow > n) {
				break;
			}
			result *= prime;
		}
	}
	return result;
}

console.log(euler5(10));
console.log(euler5(20));
