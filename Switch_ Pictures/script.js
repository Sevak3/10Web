document.getElementById('mySlide').onmousemove = function (event) {
    let x = event.offsetX;
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}
document.getElementById('mySlide').onmouseleave = function (event) {
    document.getElementById('two').style.width = '376px';
}