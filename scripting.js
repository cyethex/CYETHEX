const root =  document.documentElement; 




function debounce(func, delay) {
  let timeout;
  return function(...args) {
    // Clear the previous timer if user types again
    clearTimeout(timeout);
    // Set a new timer
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

function updateAnimation() {
    const speed = parseFloat(document.getElementById("animspeed").value);
    
  const ext = parseFloat(document.getElementById("animextremity").value);
  
  
  const duration = speed === 0 ? 9999 : 1 / speed;
  
  var tempindex=0.0;
  document.querySelectorAll(".a,.b,.c,.d,.e").forEach(el => {
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = duration * tempindex +"s";
    tempindex+=0.2;
  });
document.querySelectorAll(".ccwspin,.cwspin").forEach(el => {
    el.style.animationDuration = duration + "s";
    
  });
    
    styleSheet.textContent = `
        @keyframes floaty {
        0%   { transform: translateY(${-5 * ext}px) scale(${1 + 0.2*ext}, ${1 - 0.2*ext}); animation-timing-function: linear; }
        25%  { transform: translateY(0px)            scale(${1 - 0.2*ext}, ${1 + 0.2*ext}); animation-timing-function: ease-in-out; }
        50%  { transform: translateY(${5 * ext}px)  scale(${1 + 0.2*ext}, ${1 - 0.2*ext}); animation-timing-function: linear; }
        75%  { transform: translateY(0px)            scale(${1 - 0.2*ext}, ${1 + 0.2*ext}); animation-timing-function: ease-in-out; }
        100% { transform: translateY(${-5 * ext}px) scale(${1 + 0.2*ext}, ${1 - 0.2*ext}); animation-timing-function: linear; }
        }
    `;
    
}





document.getElementById("animspeed").addEventListener("input", debounce(updateAnimation,200));

document.getElementById("animextremity").addEventListener("input", updateAnimation);


//updateAnimation(); // run once on load