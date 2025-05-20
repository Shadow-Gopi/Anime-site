function toggleDropdown() {
    document.getElementById("generDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches('.Dropdown-Button')) {
      const dropdown = document.getElementById("generDropdown");
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
  
  const slide = document.getElementById('slide');
  const slides = slide.querySelectorAll('.slide-item');
  let index = 0;
  
  function updateSlide() {
    slide.style.transform = `translateX(-${index * 100}%)`;
  }
  
  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
  }
  
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  }
  
  setInterval(nextSlide, 5000);



  // SearchBar

  function toggleSearch() {
    const searchBox = document.getElementById("searchContainer");
    const searchBar = document.getElementById("searchBar");
    
    // Toggle search container visibility
    searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
    
    // Show the search input and focus if it's visible
    if (searchBox.style.display === "block") {
      searchBar.style.display = "inline-block"; // Show the search input if the container is visible
      searchBar.focus(); // Auto-focus input when shown
    } else {
      searchBar.style.display = "none"; // Hide the input when the container is hidden
    }
  }

  // Optional: handle search enter key press
  document.getElementById("searchBar").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const query = this.value.trim();
      if (query) {
        window.location.href = `results.html?anime=${encodeURIComponent(query)}`;
      }
    }
  });


    // Section display control
  function showSection(section) {
  document.getElementById("homeSection").style.display = section === "home" ? "block" : "none";
  document.getElementById("newSection").style.display = section === "new" ? "block" : "none";
  document.querySelector(".popularsection").style.display = section === "popular" ? "block" : "none";
}



// window.addEventListener('DOMContentLoaded', () => {
//   if (window.location.hash === '#popular') {
//     const popularSection = document.getElementById('popular-section');
//     if (popularSection) {
//       popularSection.style.display = 'block';  // Show the section
//       popularSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to it
//     }
//   }
// });

window.addEventListener('DOMContentLoaded', () => {
  const popularSection = document.getElementById('popular-section');

  // Show and scroll to popular if URL has hash
  if (window.location.hash === '#popular' && popularSection) {
    popularSection.style.display = 'block';
    popularSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Handle "Go Back to Popular" button
  const popularBtn = document.getElementById('popular-btn');
  if (popularBtn) {
    popularBtn.addEventListener('click', () => {
      if (popularSection) {
        popularSection.style.display = 'block';
        popularSection.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, '#popular'); // Update URL without reload
      }
    });
  }
});

