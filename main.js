const circles = document.querySelectorAll(".circle");
const coords = { x: 0, y: 0 };

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX - 30;
  coords.y = e.clientY - 30;
});


function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    const len = circles.length *2;
    circle.style.scale =  (len - index) / len;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles()