const slideImage = (index, direction) => {
  const images = document.querySelector(".image-gallery").children;
  const imageCount = images.length;
  let i = index;

  if (direction === 'left') {
    i++;
    if (i == imageCount) {
      i = 0;
    }
  }

  if (direction === 'right') {
    if (i == 0) {
      i = imageCount - 1;
    } else {
      i--;
    }
  }

  for(let j = 0; j < imageCount; j++) {
    images[j].classList.remove("visible");
  }
  images[i].classList.add("visible");

  return i;
}

(() => {
  const images = document.querySelector(".image-gallery").children;
  const imageCount = images.length;

  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");

  let i = 0;

  btnLeft.addEventListener("click", () => {
    i = slideImage(i, 'left');
  });
  
  btnRight.addEventListener("click", () => {
    i = slideImage(i, 'right');
  });
})();