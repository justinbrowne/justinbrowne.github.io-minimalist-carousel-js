var slides = document.querySelectorAll('#slides .evo_c-minimalist-carousel__img');
var currentSlide = 0;
var imageNumber = document.getElementById("image-number");
imageNumber.innerHTML = 1;


function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}


function goToSlide(n) {
    slides[currentSlide].className = 'evo_c-minimalist-carousel__img';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'evo_c-minimalist-carousel__img evo_c-minimalist-carousel__img--showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    nextSlide();
    if(currentSlide == 0)
      imageNumber.innerHTML = 1;
    if(currentSlide == 1) {
      imageNumber.innerHTML = 2;
    }
    if(currentSlide == 2) {
      imageNumber.innerHTML = 3;
    }
    if(currentSlide == 3) {
      imageNumber.innerHTML = 4;
    }
    if(currentSlide == 4) {
      imageNumber.innerHTML = 5;
    }
    if(currentSlide >= 4) {
    next.style.visibility = "hidden";
    }
    else if(currentSlide > 0) {
    previous.style.visibility = "initial";
}
};

previous.onclick = function() {
    previousSlide();
    if(currentSlide == 0)
      imageNumber.innerHTML = 1;
    if(currentSlide == 1) {
      imageNumber.innerHTML = 2;
    }
    if(currentSlide == 2) {
      imageNumber.innerHTML = 3;
    }
    if(currentSlide == 3) {
      imageNumber.innerHTML = 4;
    }
    if(currentSlide == 4) {
      imageNumber.innerHTML = 5;
    }

    if(currentSlide == 0 ) {
    previous.style.visibility = "hidden";
    }
    else if(currentSlide < 4) {
    next.style.visibility = "initial";
}
};

