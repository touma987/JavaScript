var array = [1,2,3,4];
var newarray = [5,6,7,8];
array.push.apply(array,newarray);

var powFunction = new Function("number1","number2","return Math.pow(number1,number2)");