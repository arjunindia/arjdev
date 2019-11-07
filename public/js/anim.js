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

var pixelwave = new PixelWave({
    // options like:
    // canvasTop: 0
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});