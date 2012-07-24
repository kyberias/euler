function euler3()
    {
    var n = 600851475143;
    var i;
    var result = '';
        
    for(i=2;i<=n;i++)
    {
        if(isPrime(i)) {
            if(n % i == 0) {
                n = n / i;
                //console.log('prime factor ' + i + ' n = ' + n);
            }
        }
    }

	return i-1;
}

// Trivial prime check function
function isPrime(n) {
    var i;
    if(n%2 == 0 && n!=2) {
	return false;
	}

    for(i = n-1; i>=2; i--) { 
        if(n%i == 0) {
            return false;
        }
    }
    return true;
}

console.log(euler3());
