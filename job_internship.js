function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  
  // Highlight the active section in the navbar
  window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");
    
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    });
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible"); // Reapply animations on re-entry
            }
          });
        },
        { threshold: 0.4 } // Trigger when 20% of the section is visible
      );
    
      // Select the sections to observe
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => observer.observe(section));
    });
  
  
  