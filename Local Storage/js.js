window.onload = function() {
    if(localStorage.getItem('bgcolor') != null) {
        var color = localStorage.getItem('bgcolor');
        document.getElementsByTagName('body')[0].style.background = color;
    }
    
    document.getElementById('green').onclick = function() {
        console.log('work');
        document.getElementsByTagName('body')[0].style.background = 'green';
        localStorage.setItem('bgcolor', 'green');
    } 
    
    document.getElementById('yellow').onclick = function() {
        console.log('work');
        document.getElementsByTagName('body')[0].style.background = 'yellow';
        localStorage.setItem('bgcolor', 'yellow');
    }
}