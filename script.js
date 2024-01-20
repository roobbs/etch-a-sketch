let selectedColor = document.querySelector(".color");
let colorBtn = document.querySelector(".colorBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");
let eraserBtn = document.querySelector(".eraserBtn");
let clearBtn = document.querySelector(".clearBtn");
let sizeDiv = document.querySelector(".size");
let sizeInput = document.querySelector(".sizeInput");
let square = document.querySelector(".square");
//
let currentMode = "rainbow";
//
colorBtn.addEventListener("click", () => (currentMode = "color"));
rainbowBtn.addEventListener("click", () => (currentMode = "rainbow"));
eraserBtn.addEventListener("click", () => (currentMode = "eraser"));
clearBtn.addEventListener("click", () => {
  createGridItems(sizeInput.value);
  if (currentMode === "eraser") {
    currentMode = "color";
  }
});
//
function createGridItems(size) {
  sizeDiv.textContent = size + "x" + size;
  square.innerHTML = "";
  square.style.cssText =
    "grid-template-columns: repeat(" +
    size +
    ", 1fr) ; grid-template-rows: (" +
    size +
    ", 1fr);";
  for (let i = 0; i < size * size; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    square.appendChild(gridItem);
    gridItem.addEventListener("mousemove", () => {
      //   gridItem.classList.remove("grid-item");
      //   gridItem.classList.add("hovered");
      switch (currentMode) {
        case "color":
          gridItem.style.backgroundColor = selectedColor.value;
          break;
        case "rainbow":
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          gridItem.style.cssText =
            "background-color:rgb(" +
            r +
            "," +
            g +
            "," +
            b +
            "); border: 0px; border-radius: 0px";
          break;
        case "eraser":
          gridItem.style.cssText = "";
          break;
      }
    });
  }
}
//
sizeInput.addEventListener("input", () => createGridItems(sizeInput.value));
//
createGridItems(sizeInput.value);
