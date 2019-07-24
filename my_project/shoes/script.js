var request = new XMLHttpRequest();
var url = "https://my.api.mockaroo.com/test.json?key=9a041570";   
request.open("GET", url,true);
//request.send();
request.onload = function () {
    if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        for(var i = 0; i < response.length; i++) {
            var div = document.getElementById('idLine');           
            var newDiv = document.createElement('div');
            newDiv.id = response[i].id;
            newDiv.innerHTML = '<img src="'+response[i].pictures+'" class="sImg"><span>'+response[i].name+" " +response[i].price+'</span><img src="images/cart_box.png" class="cartBox" onclick="cart()">';
            //document.body.appendChild(newDiv);
            div.appendChild(newDiv);
        }
    }
} //ajax
var current = 0;
var cartNumber = document.getElementById('cart_number');
function cart() {
    current++;
    var cookie = document.cookie = current;
    cartNumber.innerHTML = cookie;
};