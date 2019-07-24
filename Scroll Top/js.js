window.onload = function() {
    var scrolled;
    var timer;
    
    document.getElementById('top').onclick = function() {
        scrolled = window.pageYOffset;
//        window.scrollTo(0, 0);
        scrollToTop();        
    }
    function scrollToTop() {
        if(scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 150;
            timer = setTimeout(scrollToTop, 50);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}