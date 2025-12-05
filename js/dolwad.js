document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("range1");
    
    slider.addEventListener("input", function () {
        document.documentElement.style.setProperty('--str-height', slider.value + "%");
    });
});