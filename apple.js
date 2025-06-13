
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
    observer.observe(element);
  });

  const animateElements = () => {
    document
      .querySelectorAll(".main-content h1")
      .forEach((el) => el.classList.add("animate-float"));
    document.querySelectorAll(".product").forEach((el, index) => {
      el.classList.add("animate-scale");
      el.classList.add(`stagger-${index + 1}`);
    });
    document.querySelectorAll(".feature-box").forEach((el, index) => {
      el.classList.add("animate-left");
      el.classList.add(`stagger-${index + 1}`);
    });
  };

  animateElements();
});
