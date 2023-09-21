window.addEventListener("scroll", function() {
    let scrolled = window.pageYOffset;
    const parallaxSections = document.querySelectorAll('.parallax');
  
    parallaxSections.forEach((section, index) => {
      let speed = 0.5;
      let offset = section.offsetTop;
      let newPosition = (offset - scrolled) * speed;
  
      section.style.backgroundPosition = "50% " + newPosition + "px";
    });
  });
  