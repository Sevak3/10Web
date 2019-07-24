//document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout(
        function () {
            var slot = document.getElementById('slots');
            left = left - 256;
            if (left < -1024) {
                left = 0;
                clearTimeout(timer);
            }
            slots.style.left = left + 'px';
            autoSlider();
    }, 1000);    
}

/*function sliderLeft() {
    var slot = document.getElementById('slots');
    left = left - 256;
    if (left < -1024) {
        left = 0;
        clearTimeout(timer);
    }
    slots.style.left = left + 'px';
    autoSlider();
}*/

autoSlider();