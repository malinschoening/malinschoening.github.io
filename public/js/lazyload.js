if (typeof window !== 'undefined') {

    document.addEventListener("DOMContentLoaded", () => {
        function intersectAll({ selector = ".fade-in-lazy", threshold = 0.1, root = null, rootMargin = "0px" }) {
            let elements = document.querySelectorAll(selector);

            const handleIntersect = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible-lazy");
                        observer.unobserve(entry.target); 
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, { threshold, root, rootMargin });

            elements.forEach((el) => observer.observe(el));
        }

        intersectAll({ selector: ".fade-in-lazy" });
    });

}
