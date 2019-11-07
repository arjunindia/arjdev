document.addEventListener('DOMContentLoaded', function() {
anime({
  targets: '.scr',
  direction: 'alternate',
  duration: 80
});


particlesJS.load('bd', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


var options = {
  strings: ["Arjun","Epic Dev"],
  typeSpeed: 10,
  backDelay: 1000,
  loop:true
};

var options2 = {
  strings: ["This is my homepage. Hope you guys like it!"],
  startDelay: 3000,
  typeSpeed: 10,
  backDelay: 1000,
  
  showCursor:false
};
$('#x').click(function(event) {
$('#shm').slideToggle(1000);
});

var typed = new Typed('.element', options);
var typed2 = new Typed('#shell-text', options2);
ctx.strokeStyle = ctxBars.strokeStyle = ctxBars.fillStyle = 'rgba(69, 212, 12, 0.5)';

});