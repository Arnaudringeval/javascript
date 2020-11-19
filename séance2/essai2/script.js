let query = document.querySelector ('#menu .item span');
alert(query.innerHTML); //Affiche element1

let queryall = document.querySelectorAll('#menu .item span');
alert(queryall.length) //Affiche 2

alert(queryall[0].innerHTML + '-' + queryall[1].innerHTML) //Affiche element1 et element2