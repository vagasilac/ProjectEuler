var a = 0;
var b = 1;
var c = 0;
var i = 0;
var sum = 0;
var sumAll = 0;

for (i = 0; c <= 4000000; i++) {
    c = a + b;
    a = b;
    b = c;
    sumAll += c;
    if (c % 2 === 0) {
        sum += c;
    }
}

function result() {
    document.getElementById("result").innerHTML = sum;
}

result();