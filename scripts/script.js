var percent = document.getElementById('percent');
var barra = document.getElementById('barraAumento');
var scroll = document.getElementById('scrollPath');

var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    var progress = (window.pageYOffset / totalHeight) *100;
    barra.style.height = progress + '%';
}