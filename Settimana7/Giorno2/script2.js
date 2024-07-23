
h1 = document.getElementsByTagName('h1')[0];

let temporimasto = 10;

temp = sessionStorage.getItem('myTemp')


const myTimer = setInterval ( function(){


    temporimasto --

    
    sessionStorage.setItem('myTemp', temporimasto)
    h1.innerText = temporimasto;
    if (temporimasto < 0){
        clearInterval(myTimer);
        h1.innerText = 'Fine Timer';
    }

}, 1000);

