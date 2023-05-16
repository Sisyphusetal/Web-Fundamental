// Console.log all odd numbers between 1 and 20

for(var i=1; i<21; i++) {
    if(i%2 != 0) {
        console.log(i);
    }
}

// Console.log all multiples of 3 from 100 to 0 (decreasing loop)

for(var i=100; i>0; i--) {
    if(i%3 === 0) {
        console.log(i);
    }
}

// Console.log the values in the sequence 4, 2.5, 1, -0.5, -2, -3.5
// There are a few solutions to this problem, but I presumed that this meant
// to practice looping through an array, so my first solution is for that.
// The second loop is a very specific loop created to complete the prompt
// and has no other real application.

var sequence = [4, 2.5, 1, -0.5, -2, -3.5];
for(var i=0; i<sequence.length; i++) {
    console.log(sequence[i]);
}

for(var i=40; i>-36; i-=15) {
    console.log(i/10);
}

// Console.log the sum of all numbers from 1 to 100

var i = 1;
var sum = 0;
while(i<101) {
    sum+=i;
    i++;
}

console.log(sum);

// Console.log the product of all numbers between 1 and 12

var i = 1;
var product = 1;
while(i<13) {
    product*=i;
    i++;
}

console.log(product);