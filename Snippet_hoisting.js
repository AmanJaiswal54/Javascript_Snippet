console.log('f1');
woo()
function woo() {
    console.log('function declaration');
}
var woo = function() {
    console.log('function expression');
}
console.log('f2');
woo();


// f1
// function declaration
// f2
// function expression
