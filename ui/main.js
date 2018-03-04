console.log('Loaded!');

//change main text by JS

var element = document.getElementById('wub');
element.innerHTML= 'new value';

var pic = document.getElementById('madi');
pic.onclick = function() {
    pic.style.marginleft = "100px";
}