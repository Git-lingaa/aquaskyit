
// ! Hamburger menu toggle
document.getElementById("hamburger").onclick = function() {
    var navLinks = document.getElementById("skynav-links");
    navLinks.classList.toggle("show");
};

// Shrinking Navbar and Progress Arrow
window.addEventListener("scroll", () => {
  // Shrink navbar
  const navbar = document.getElementById("sky-navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }

  // Progress arrow
  const scrollProgress = document.getElementById("progress");
  const progressValue = document.getElementById("progress-value");
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(rgb(14, 176, 168) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
});


// ! Loading animation
window.addEventListener('load', function() {
  // Once the page loads, hide the loading screen and show the main content
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  setTimeout(function() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 1000); // Wait for the 5-second water filling animation to complete
});



// ! Quote-form
// Get the modal
var modal = document.getElementById("quoteModal");

// Get the button that opens the modal
var btn = document.getElementById("openFormBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const bottleSize = document.getElementById("bottleSize").value;
  const quantity = document.getElementById("quantity").value;

  if (!name || !phone || !email || !service || !bottleSize || !quantity) {
      alert("Please fill all fields before submitting.");
      return false;
  }

  if (!/^\d+$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
  }

  if (quantity <= 0) {
      alert("Quantity should be greater than 0.");
      return false;
  }

  return true;
}
