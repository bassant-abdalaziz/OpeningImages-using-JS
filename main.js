images = document.querySelectorAll("img");

images.forEach(image => {
    image.onmouseover = function () {
        image.classList.add("active")
    }

    image.onmouseout = function () {
        image.classList.remove("active")
    }
});

