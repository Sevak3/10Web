// 1
var sdvig = 0;
var timer;

var test = document.getElementById('test');

//move();
function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig = sdvig + 10;
    timer = setTimeout(move, 50);
}


//var timer = setInterval(move, 50);
document.getElementById('stop').onclick = function() {
    //clearInterval(timer);
    clearTimeout(timer);
}

// 2
//setTimeout(move, 5000);

var a = 10;
obr();
function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if(a < 0){
        clearTimeout(timer);
        alert('Timer is off');
    }
    else {
        timer = setTimeout(obr, 500);
    }
}