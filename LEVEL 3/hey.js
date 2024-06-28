document.addEventListener("DOMContentLoaded", () => {
    // Gallery Modal Functionality
    const modal = document.querySelector(".modal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const works = document.querySelectorAll(".work");

    works.forEach(work => {
       work.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = work.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Slideshow Functionality
    let slideIndex = 0;

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
});
