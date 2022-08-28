const frames = Array.from(document.querySelectorAll('.frame'));

let zSpacing = -1000; //расстояние по оси Z между элементами
let lastPosition = zSpacing / 5; //
let zVals = []; //значения по оси Z

window.onscroll = function() {
  let top = document.documentElement.scrollTop;
  let delta = lastPosition - top;
  lastPosition = top;

  frames.forEach((element, i) => {
    zVals.push((i * zSpacing) + zSpacing)
    zVals[i] += delta * -2;
    let frame = element;
    let transform = `translateZ(${Math.round(zVals[i])}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  });
}

window.scrollTo(0, 1);