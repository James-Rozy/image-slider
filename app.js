(() => {
  const images = document.querySelector(".image-gallery").children;
  const imageCount = images.length;

  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");

  let i = 0;

  btnLeft.addEventListener("click", () => {
    i++;
    if (i == imageCount) {
      i = 0;
    }

    for(let j = 0; j < imageCount; j++) {
      images[j].classList.remove("visible");
    }
    images[i].classList.add("visible");
  });
  
  btnRight.addEventListener("click", () => {
    if (i == 0) {
      i = imageCount - 1;
    } else {
      i--;
    }

    for(let j = 0; j < imageCount; j++) {
      images[j].classList.remove("visible");
    }
    images[i].classList.add("visible");
  });

  
})();