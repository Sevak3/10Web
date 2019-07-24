document.onmousemove = function (){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://i.pinimg.com/originals/ff/dd/7a/ffdd7a1b9dbfaa5f26dae0917e5df6b4.png" id="cat">');
	var cat = document.getElementById('cat');
	cat.style.position = 'fixed';

	document.onmousemove = function(event){
		cat.style.left = event.clientX +20+'px';
		cat.style.top = event.clientY +20+'px';
	}

}