console.log('Loaded!');

//change main text by JS

var element = document.getElementById('wub');
element.innerHTML= 'new value';

var pic = document.getElementById('madi');
var marginLeft = 0;
    function moveRight() {
        marginLeft = marginLeft+10;
        pic.style.marginLeft = marginLeft + 'px' ;
    }

pic.onclick = function() {
    var interval = setInterval(moveRight, 100);
}