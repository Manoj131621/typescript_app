console.log("your code run here");
function union(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var unionresult = union(34, 24);
console.log(unionresult);
var stringres = union('Manoj', 'Seeta');
console.log(stringres);
