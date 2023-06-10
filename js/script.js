// Selecting Elements
const ImgBox = document.querySelector(".imgBox");
const WhiteBoxes = document.querySelectorAll(".whiteBox");
const messageElement = document.querySelector("#message");
const btn = document.querySelector(".btn");

// Adding Event Listener on DragStart
ImgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

// Adding Event Listener on DragEnd
ImgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
});

// Adding Event Listener on DragOver
for (WhiteBox of WhiteBoxes) {
  WhiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  WhiteBox.addEventListener("dragenter", (e) => {
    e.target.classList.add("dashed");
  });
  WhiteBox.addEventListener("dragleave", (e) => {
    e.target.classList.remove("dashed");
  });
  WhiteBox.addEventListener("drop", (e) => {
    e.target.append(ImgBox);
    messageElement.textContent = "Image moved to a new box!";

    setTimeout(() => {
      messageElement.textContent = "";
    }, 2000);
  });
}
// reset button
btn.addEventListener("click", () => {
  window.location.reload();
});
