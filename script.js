var slides = document.querySelectorAll('.evo_c-minimalist__img--slides, .evo_c-minimalist-carousel__img');
var currentSlide = 0;
var imageNumber = document.getElementsByClassName("evo_c-minimalist__img--number");
imageNumber[0].innerHTML = 1;


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

var next = document.getElementById('evo_c-minimalist__buttons--next');
var previous = document.getElementById('evo_c-minimalist__buttons--previous');

next.onclick = function() {
    nextSlide();
    if(currentSlide == 0)
      imageNumber[0].innerHTML = 1;
    if(currentSlide == 1) {
      imageNumber[0].innerHTML = 2;
    }
    if(currentSlide == 2) {
      imageNumber[0].innerHTML = 3;
    }
    if(currentSlide == 3) {
      imageNumber[0].innerHTML = 4;
    }
    if(currentSlide == 4) {
      imageNumber[0].innerHTML = 5;
    }
    if(currentSlide >= 4) {
    next.style.visibility = "hidden";
    }
    else if(currentSlide >= 0) {
    previous.style.visibility = "initial";
}
};

previous.onclick = function() {
    previousSlide();

    if(currentSlide == 0)
      imageNumber[0].innerHTML = 1;
    if(currentSlide == 1) {
      imageNumber[0].innerHTML = 2;
    }
    if(currentSlide == 2) {
      imageNumber[0].innerHTML = 3;
    }
    if(currentSlide == 3) {
      imageNumber[0].innerHTML = 4;
    }
    if(currentSlide == 4) {
      imageNumber[0].innerHTML = 5;
    }

    if(currentSlide == 0 ) {
    previous.style.visibility = "hidden";
    }

    else if(currentSlide < 4) {
    next.style.visibility = "initial";
}
};

