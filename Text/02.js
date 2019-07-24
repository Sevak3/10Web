function out() {
    var p = document.getElementById('out');
    //p.innerHTML = "Hello";
    //p.insertAdjacentHTML('beforeBegin', 'Hi');
    //p.insertAdjacentHTML('afterBegin', 'Hi');
    //p.insertAdjacentHTML('beforeEnd', 'Hi');
    //p.insertAdjacentHTML('afterEnd', 'Hi');
    p.outerHTML = '<div class="one">hello</div>';
}