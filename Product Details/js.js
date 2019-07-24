var goods = {
    "28292" : {
        "name" : "Banana",
        "cost" : 30,
        "img" : "https://dtgxwmigmg3gc.cloudfront.net/files/543720eee1272f6e82000499-icon-256x256.png",
        "stock" : "yes"
    },
    "23729" : {
        "name" : "Tomato",
        "cost" : 15,
        "img" : "https://dtgxwmigmg3gc.cloudfront.net/files/543720cbe1272f6e82000280-icon-256x256.png",
        "stock" : "no"
    },
    "45458" : {
        "name" : "Strawberry",
        "cost" : 300,
        "img" : "https://dtgxwmigmg3gc.cloudfront.net/files/56fc78f252ba0b45e70396e9-icon-256x256.png",
        "stock" : "yes"
    }
};
var out = '';
for (var key in goods) {
    out += 'Name: ' + goods[key].name + '<br>';
    out += 'Cost: ' + goods[key].cost + '<br>';
    out += 'Presence: ' + goods[key].stock + '<br>';
    //<img src="">
    out += '<img src="'+goods[key].img +'">';
    out += '<hr>';
}
document.getElementById('out').innerHTML = out;