
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    //  Header Animation (Slide from Top)
    gsap.from("header", {
        duration: 0.8,
        y: -100,
        opacity: 0,
        ease: "power2.out"
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars");
                menuIcon.classList.toggle("fa-xmark");
            }
            
            // Animate items in mobile menu
            if (!mobileMenu.classList.contains("hidden")) {
                gsap.from("#mobile-menu li", {
                    x: -20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });

        // Close menu when clicking on links
        const menuLinks = mobileMenu.querySelectorAll("li");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            });
        });
    }

    //  Hero Section Animation (Text from Left, Image Scale Up)
    gsap.from(".Hero .left", {
        duration: 1.2,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from(".Hero img", {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out",
        delay: 0.6
    });

    //  Client Logos (Staggered Fade-In)
    gsap.from(".client img", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.client',
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    //  Boxes Animation (Scale & Fade-In)
    // gsap.from(".boxes .first", {
    //     duration: 1.2,
    //     scale: 0.8,
    //     opacity: 0,
    //     // stagger: 0.2,
    //     ease: "back.out(1.7)",
    //     delay: 0.5,
    //     scrollTrigger: {
    //         trigger: '.boxes .first',
    //         start: "top 80%",
    //         end: "top 50%",
    //         scrub: 1,
    //         // markers: true,
    //     },
    //     overwrite: "auto"
    // });

    //  Scroll Animations for Sections
    gsap.utils.toArray(".scroll-reveal").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

     
    
    let counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        let target = parseInt(counter.getAttribute("data-target"), 10); // Get the number

        let countObj = { value: 0 }; // Object for GSAP animation

        gsap.to(countObj, {
            value: target,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: function () {
                counter.innerText = Math.floor(countObj.value).toLocaleString();
            },
            scrollTrigger: {
                trigger: counter,
                start: "top 80%", // Start when the top of counter is 80% in viewport
                once: true, // Runs only once
            }
        });
    });


});
