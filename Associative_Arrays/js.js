//var arr = [4, 12, 'hello'];
//console.log(arr);
var arr = {};
var arr1 = {
    "one"   : 12,
    "hello" : 'world',
    "prim"  : 33,
    "double key" : 777
};
//console.log(arr1['prim']);
//console.log(arr1.prim);

//arr1.one = 99;
//console.log(arr1.one);

//console.log(arr1.duble key); !Error
console.log(arr1['double key']);

var str = 'hello';
console.log(arr1[str]);

var out = document.getElementById('out');
for (var key in arr1) {
    out.innerHTML += key + '---' + arr1[key] + '<br>';
}