gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // 2. Smooth Reveal for Sections
    gsap.utils.toArray('.scroll-reveal').forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // 3. Counter Animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        ScrollTrigger.create({
            trigger: counter,
            start: "top 95%",
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    modifiers: {
                        innerText: (val) => Math.floor(val).toLocaleString()
                    }
                });
            }
        });
    });
});