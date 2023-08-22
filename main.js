const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// ************** Next *************

const svg = document.querySelector(".cursor img"); 
svg.style.visibility = "hidden"; 

// ************** Next *************

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX - 30;
  coords.y = e.clientY - 30;

// ************** Next *************

  svg.style.visibility = "hidden"; 
  circles.forEach(function(circle) { 
    circle.style.display = "block";
});

setTimeout(function () {
    circles.forEach(function(circle) {
        circle.style.display = "none";
        svg.style.visibility = "visible";
        svg.style.display = "block";
    });
  }, 1000); // Adjust the delay as needed

  // ************** Next *************

});


function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    const len = circles.length *2;  // tail thinkness //
    circle.style.scale = (len- index) / len;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
