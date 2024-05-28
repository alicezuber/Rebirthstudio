// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const languageMenu = document.querySelector('.language');
    languageMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        this.querySelector('.dropdown').classList.toggle('show');
    });

    document.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // 每3秒切換一次圖片
}

