// Initialize Main Hero Swiper
const heroSwiper = new Swiper('.hero-slider', {
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Product Carousel Swiper
const productSwiper = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

// Initialize Testimonial Swiper
const testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Add to Cart Functionality (Dummy logic)
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');
const toast = document.getElementById('toast');
let cartCount = 0;

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Increment cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Show Toast Notification
        toast.className = "show";
        setTimeout(function(){ 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    });
});


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Category Cards Reveal on Scroll
gsap.utils.toArray('.category-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: ".category-grid",
            start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.15
    });
});

// Bridal Banner Reveal
gsap.from(".bridal-content", {
    scrollTrigger: {
        trigger: ".bridal-banner-section",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// Gender Cards Reveal
gsap.utils.toArray('.gender-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: ".gender-grid",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.2
    });
});

// USP Items Reveal
gsap.utils.toArray('.usp-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: ".usp-section",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: i * 0.15
    });
});
