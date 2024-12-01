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
  
  
  
  
    document.addEventListener("DOMContentLoaded", () => {
      const storyBoxes = document.querySelectorAll(".story-box");
      const storiesHeading = document.querySelector(".stories-heading");
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Reapply animation for heading
              storiesHeading.classList.remove("fade-in-down");
              void storiesHeading.offsetWidth; // Trigger reflow
              storiesHeading.classList.add("fade-in-down");
    
              // Reapply animation for each story box
              storyBoxes.forEach((box) => {
                box.style.opacity = "0";
                box.style.transform = "translateY(20px)";
                void box.offsetWidth; // Trigger reflow
                box.style.animation = "";
                setTimeout(() => {
                  box.style.animation = `fade-up 1s ease-in-out forwards ${box.dataset.delay || 0}s`;
                }, 0);
              });
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );
    
      observer.observe(document.querySelector("#stories-section"));
    });
    
    // Carousel navigation
  const carousel = document.getElementById("storyCarousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 5) % 5; // Loop back to the last story
    updateCarousel();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 5; // Loop back to the first story
    updateCarousel();
  });

  const storiesContainer = document.getElementById('stories-container');
  const seeMoreBtn = document.getElementById('see-more-btn');
  const backBtn = document.getElementById('back-btn');

  // Define the initial set of stories
  const initialStories = [
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"My decision was correct! InstantStore provides the perfect web platform."',
      name: 'Barbara Young',
      link: 'crazy4coupons.com',
    },
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"We have successfully sold over $35 million worth of products."',
      name: 'Preston Humphries',
      link: 'cvcoffee.com',
    },
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"Not just a product or service, InstantStore is a business partnership."',
      name: 'Maura Celik',
      link: 'epartyzone.com',
    },
  ];

  // Define the new set of stories
  const newStories = [
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"InstantStore helped us expand globally with seamless integration."',
      name: 'Rajesh Kumar',
      link: 'globalmart.com',
    },
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"Their support team helped us achieve our dream of running an online store."',
      name: 'Emily Brown',
      link: 'emilyskitchen.com',
    },
    {
      img: 'https://via.placeholder.com/300x150',
      text: '"Thanks to InstantStore, we grew our local market into a global business."',
      name: 'Maria Fernandez',
      link: 'worldtrade.com',
    },
  ];

  // Function to render stories
  function renderStories(stories) {
    storiesContainer.innerHTML = '';
    stories.forEach(story => {
      const storyCard = document.createElement('div');
      storyCard.classList.add('story-card');
      storyCard.innerHTML = `
        <img src="${story.img}" alt="Story Image" class="story-image">
        <p class="story-text">${story.text}</p>
        <p class="story-name">${story.name}</p>
        <a href="#" class="story-link">${story.link}</a>
      `;
      storiesContainer.appendChild(storyCard);
    });
  }

  // Event listener for "See More"
  seeMoreBtn.addEventListener('click', () => {
    renderStories(newStories);
    seeMoreBtn.style.display = 'none';
    backBtn.style.display = 'inline-block';
  });

  // Event listener for "Back"
  backBtn.addEventListener('click', () => {
    renderStories(initialStories);
    seeMoreBtn.style.display = 'inline-block';
    backBtn.style.display = 'none';
  });

  // Initial render
  renderStories(initialStories);