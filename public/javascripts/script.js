window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

// Too lazy to color the anchors on your own? well spent twice the amount of time to write a function to do it for you LMFAO
// Also, dont touch, it works, why? i dont know, how? i dont know.
const levels = document.querySelector(".levels");
const lvlSetsColumn = levels.querySelector(".lvlSetsColumn");
const anchors = lvlSetsColumn.querySelectorAll("a");
const numAnchors = anchors.length;
function generateGradientColors(startColor, endColor, steps) {
  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);
  const colors = [];

  for (let i = 0; i < steps; i++) {
    const r = Math.round(start.r + ((end.r - start.r) * i) / (steps - 1));
    const g = Math.round(start.g + ((end.g - start.g) * i) / (steps - 1));
    const b = Math.round(start.b + ((end.b - start.b) * i) / (steps - 1));
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
}
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}
const gradientColors = generateGradientColors("#FFA500", "#FF0000", numAnchors);
anchors.forEach((anchor, index) => {
  anchor.style.boxShadow = "5px 5px 0px 0px " + gradientColors[index];
  anchor.style.border = "2px solid " + gradientColors[index];
});
