function string_length(message) {
    return message.length;
}
var x = string_length("Test 1");
console.log(x);
function string_nospaces(message) {
    return message.replace(" ", "").length;
}
var y = string_nospaces("test 1");
console.log(y);
function string_length_both(message, spaces) {
    var count;
    if (spaces) {
        count = string_length(message);
    }
    else {
        count = string_nospaces(message);
    }
    return count;
}
var i = string_length_both("test1", true);
console.log(i);
