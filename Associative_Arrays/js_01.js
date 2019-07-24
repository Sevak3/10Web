// Task 1 - Human Data
/*var man = {
    "name" : "Alex",
    "age" : 53,
    "id" : "131313",
    "sex" : "male"
};
console.log(man);
console.log(man.name);
console.log(man['age']);
var aaa = 'sex';
console.log(man[aaa]);*/

// Task 2 - Consider Age
/*var man2 = {
    "name" : "Alex",
    "age" : 53,
    "id" : "131313",
    "sex" : "male",
    "year" : function () {
        return 2017 - this.age;
    }
};
console.log(man2.year());*/

// Task 3 - Sum of Array Numbers
var arr = {
    "mas" : [5, 7, 13, 31],
    "sum" : function () {
        var sum = 0;
        for(var i = 0; i < this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
}
console.log(arr.sum());