const picture = document.querySelector(".div3 .js-komodo-pic");

const button = document.querySelector(".js-change-pic-button");

let currentPictureIndex = 0;

const pictureSources = [
  "/Images/komodo dragon.jpg",
  "/Images/download (1).jpg",
  "/Images/download (2).jpg",
  "/Images/download (3).jpg",
  "/Images/download (4).jpg",
  "/Images/download (5).jpg",
  "/Images/download (6).jpg",
  "/Images/download (7).jpg",
  "/Images/download (8).jpg",
];

button.addEventListener("click", () => {
  currentPictureIndex = (currentPictureIndex + 1) % pictureSources.length;
  picture.src = pictureSources[currentPictureIndex];
});
