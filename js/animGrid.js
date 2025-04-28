import { gsap } from "../node_modules/gsap/all.js";
    
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  var isActive;

  window.onfocus = function () {
    window.isActive = true;
  };

  window.onblur = function () {
    window.isActive = false;
  };
window.isActive = true;
function insert(item, num, num2){
  grid.insertBefore(item, document.getElementById('grid-item'+num2));
  item.id = 'grid-item'+num;
}
function switchGrid(){
  if(window.isActive){
    let grid = document.querySelector('.grid');
    let num1 = getRandomNumber(1, 15);
    let num2 = getRandomNumber(1, 15);
    while (num1 == num2){
        num2 = getRandomNumber(1, 15);
    }
    let item1 = document.getElementById('grid-item'+num1);
    let item2 = document.getElementById('grid-item'+num2);
    let num3 = num1 + 1;
    let num4 = num2 + 1;
    let pos1x = item1.offsetLeft;
    let pos1y = item1.offsetTop;
    let pos2x = item2.offsetLeft;
    let pos2y = item2.offsetTop;
    let xoffset1 = pos2x - pos1x;
    let yoffset1 = pos2y - pos1y;
    let xoffset2 = pos1x - pos2x;
    let yoffset2 = pos1y - pos2y;
    let tl1 = gsap.timeline();
    tl1.to("#grid-item"+num1, {x:xoffset1, duration:0.5})
    tl1.to("#grid-item"+num1, {y:yoffset1, duration:0.5})
    tl1.set("#grid-item"+num1, {
      x:0, 
      y:0,
      onComplete: insert,
      onCompleteParams: [item1, num2, num4],
    })
    let tl2 = gsap.timeline();
    tl2.to("#grid-item"+num2, {x:xoffset2, duration:0.5})
    tl2.to("#grid-item"+num2, {y:yoffset2, duration:0.5})
    tl2.set("#grid-item"+num2, {
      x:0, 
      y:0,
      onComplete: insert,
      onCompleteParams: [item2, num1, num3], 
    })
    // item1.x = elPosition(item1).clientX;
    // item1.y = elPosition(item1).clientY;
    // item2.x = elPosition(item2).clientX;
    // item2.y = elPosition(item2).clientY;
    // item1.xoffset = item2.x - item1.x;
    // item1.yoffset = item2.y - item1.y;
    // item2.xoffset = item1.x - item2.x;
    // item2.yoffset = item1.y - item2.y;
    // let tl1 = gsap.timeline();
    // tl1.to("#grid-item"+num1, {x:item1.xoffset, duration:1})
    // tl1.to("#grid-item"+num1, {y:item1.yoffset, duration:1})
    // tl1.set("#grid-item"+num1, {
    //   x:0, 
    //   y:0,
    //   onComplete: insert,
    //   onCompleteParams: [item1, num2, num4],
    // })
    // let tl2 = gsap.timeline();
    // tl2.to("#grid-item"+num2, {x:item2.xoffset, duration:1})
    // tl2.to("#grid-item"+num2, {y:item2.yoffset, duration:1})
    // tl2.set("#grid-item"+num2, {
    //   x:0, 
    //   y:0,
    //   onComplete: insert,
    //   onCompleteParams: [item2, num1, num3], 
    // })
  }
}


setInterval(switchGrid, 3000);

