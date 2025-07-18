// Wait for page to fully load
document.addEventListener("DOMContentLoaded", function () {
  // 1. SEARCH BOX FUNCTIONALITY
  const searchBtn = document.querySelector(".search_btn");
  const searchInput = document.querySelector(".search_box input");

  searchBtn.addEventListener("click", function () {
    const searchValue = searchInput.value.trim();
    if (searchValue === "") {
      alert("Please enter a name to search.");
    } else {
      console.log("Searching for:", searchValue);
      alert(`Searching for "${searchValue}"`);
    }
  });

  // 2. BUTTON NAVIGATION ACTIONS (optional alerts)
  const navButtons = [
    { selector: ".home", message: "Going to Home 🏠" },
    { selector: ".about_us", message: "Opening About Us 🙂" },
    { selector: ".offers", message: "Showing Offers 🎁" },
    { selector: ".sign_in", message: "Redirecting to Sign In 🔐" },
    { selector: ".register", message: "Redirecting to Register 🆕" },
  ];

  navButtons.forEach(({ selector, message }) => {
    const div = document.querySelector(selector);
    if (div) {
      div.addEventListener("click", () => {
        alert(message);
        // Optionally: window.location.href = "your-link.html";
      });
    }
  });
});

