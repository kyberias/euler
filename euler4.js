function euler4()
{
    var lp = 0;
    for(var i=100;i<999;i++) {
        for(var j=i;j<999;j++) {
            var p = j*i;
            if(p > lp && isPalindrome(p)) {
                lp = p;
                console.log('palindrome: ' + lp);
            }
        }
    }
    console.log('final palindrome: ' + lp);
}

function isPalindrome(n) {
    n = n.toString();
    var len = n.length;
    for(var i=0;i<n/2;i++) {
        if(n[i] != n[len-i-1]) {
            return false;
        }
    }
    return true;
}

euler4();
