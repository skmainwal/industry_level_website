import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Handle smooth scrolling for navigation links
    const handleNavClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Smooth scroll to target section
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });

        // Add animation class
        targetSection.classList.add("section-enter");
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 50);
      }
    };

    // Add click event listener to handle navigation
    document.addEventListener("click", handleNavClick);

    // Initialize sections with animation classes
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("section-enter");
      section.classList.add("active");
    });

    // Cleanup
    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
