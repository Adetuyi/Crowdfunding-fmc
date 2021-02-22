function myBookmark(){
    var change = document.getElementsByClassName('bookmark');
    var parent = document.getElementById('bookmark');
    
    if(change[0].innerHTML == 'Bookmark'){
        change[0].innerHTML = 'Bookmarked';
        parent.classList.toggle('marked');
    }else{
        change[0].innerHTML = 'Bookmark';
        parent.classList.toggle('marked');
    }
}   
function show(a){
            var show = document.getElementsByClassName('radio');
            var hidden = document.getElementsByClassName('pledge');
        if(a != 0){
            var i = a - 1;
            if(show[a].checked == true){
                hidden[i].classList.add('visible');

                for(var b = 0; b < 3; b++){
                    if(b == i){
                        continue;
                    }
                    hidden[b].classList.remove('visible');   
                }
            }  
        }else{
            for(var c = 0; c < 3; c++){
                hidden[c].classList.remove('visible');   
            }
        }
        
}
function popup(){
    document.getElementById('popup-one').classList.remove('hidden');
    document.getElementById('overlay').classList.add('darken');
}
function popupTwo(x){

    var y = document.getElementById('backers');
    z = parseInt(y.textContent)
    y.innerHTML = z + 1;
    

    var a = document.getElementById('money');
    b = parseInt(a.textContent)
    c = b + x;
    a.innerHTML = c;

    var d = document.getElementById('bar');
    d.style.width = 'calc(('+ c + ' / 100000) * 100%)';

    document.getElementById('popup-two').classList.remove('hidden');
    document.getElementById('popup-one').classList.add('hidden');
}
function done(){
    document.getElementById('popup-two').classList.add('hidden');
    document.getElementById('overlay').classList.remove('darken');
    document.getElementById('popup-one').classList.add('hidden');
}
var i = 0;
function displayNav(){
    var nav = document.getElementsByClassName('ul');
    nav[0].classList.toggle('display');

    var ham = document.getElementById('hamburger');    
    document.getElementById('overlay').classList.toggle('darken');

    if(i == 0){
        ham.setAttribute('src', "images/icon-close-menu.svg");
        i = 1;
    }else{
        ham.setAttribute('src', "images/icon-hamburger.svg");
        i = 0;
    }

}