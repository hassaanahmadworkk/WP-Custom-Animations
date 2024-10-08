// Elementor Plugin is Mandatory for this animation Working
// ADd this code to yout js file in WP. this will work if you are using elementor. 
// and you want to add aniamtion to your custom templates . you have to just add this code in js file
// just add the class in your code and the elementor animations will work on your code.
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle intersection
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.innerWidth > 768) {
                const settings = JSON.parse(entry.target.dataset.settings);
                const animationClass = settings._animation;
                entry.target.classList.add('animated');
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the 'animate-on-scroll' class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Ensure smooth scroll behavior
    document.body.style.scrollBehavior = 'smooth';
});
