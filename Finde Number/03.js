var prNum = Math.floor((Math.random() * 10) + 1);//1-10
//var tempOut = document.getElementById('temp-out');
//    tempOut.innerHTML = prNum;
console.log(prNum);

function foo1() {
    var num = document.getElementById('myNum').value;
    var out = document.getElementById('out');
    
    if (num == prNum) {
        out.innerHTML = "You Guessed"
    }
    else if (num > prNum) {
        out.innerHTML = "Your Number is More";
    }
    else {
        out.innerHTML = "Your Number is Less";
    }    
    
}