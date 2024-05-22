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
