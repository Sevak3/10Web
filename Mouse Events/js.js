var block = document.getElementById('one');
/*block.onclick = function () {
    this.style.background = 'green';
    //this.onclick = null;
}
//Dodle Click
block.ondblclick = function () {
    this.style.background = 'red';
}*/
//Right Click
/*document.oncontextmenu = function () {
    return false;
}*/
/*block.oncontextmenu = function () {
    this.style.background = 'black';
    return false;
}
block.onmouseenter = function () {
    console.log('in !!!');
    this.style.background = 'gold';
}
block.onmouseleave = function () {    
    this.style.background = 'pink';
}*/
//Move Mause
/*var a = 0;
block.onmousemove = function () {
    a++;
    this.style.width = 100 + a + 'px';
}*/
//Push and Hold
var b = 0;
block.onmousedown = function (event) {
    b++;
    this.style.height = 100 + b + 'px';
    console.log('button ' + event.button);
    console.log('which ' + event.which);
}
block.onmouseup = function () {
    this.style.background = 'cyan';
}