document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in, .fade-up, .slide-in-left, .slide-in-right");

    const handleScroll = () => {
        fadeElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8) {
                el.style.opacity = 1;
                el.style.transform = "translate(0)";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
