//slider

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    activeClasses();
    panel.classList.add("active");
  });
});

function activeClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".img-fluid");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.forEach((el) => {
  el.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Get the modal
var modal_2 = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
};

// Get the modal
var modal_2 = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
};
