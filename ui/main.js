console.log('Loaded!');



//button

button.onClick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    
    //mke request
    request.open('GET', 'http://utkarshmask.imad.hasura-app.io/counter', true);
    request.send(null);
};
