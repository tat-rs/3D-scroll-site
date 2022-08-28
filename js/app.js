const frames = Array.from(document.querySelectorAll('.frame'));
const soundBtn = document.querySelector('.btn-sound');
const audio = document.querySelector('.audio');

//3D scroll
let zSpacing = -1200; //расстояние по оси Z между элементами
let lastPosition = zSpacing / 2; //
let zVals = []; //значения по оси Z

window.onscroll = function() {
  let top = document.documentElement.scrollTop;
  let delta = lastPosition - top;
  lastPosition = top;

  frames.forEach((element, i) => {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -3.3;
    let frame = element;
    let transform = `translateZ(${Math.round(zVals[i])}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  });
}

window.scrollTo(0, 1);

//audio
soundBtn.addEventListener('click', () => {
  soundBtn.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function() {
  soundBtn.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function() {
  audio.pause();
};