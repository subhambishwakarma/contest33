// Signup Page
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirm").value;

  // Validate the form fields (Add your validation logic here)

  // Generate a random access token (16-byte string)ll
  const accessToken = generateAccessToken();

  // Store user data in local storage
  const userData = {
    fullname,
    email,
    password,
    confirmpassword,
    
  };
  localStorage.setItem("userData", JSON.stringify(userData));

  // Show success message
  signupMessage.textContent = "Signup successful! Redirecting to profile...";
  signupMessage.style.color = "green";

  // Redirect to Profile Page after 2 seconds
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 2000);
});

// Profile Page
const name = document.getElementById("name");
const email = document.getElementById("email");
const  token= document.getElementById("token");
const logoutBtn = document.getElementById("logoutBtn");

// Check if the user is logged in (access token exists in local storage)
const userData = JSON.parse(localStorage.getItem("userData"));
if (userData && userData.accessToken) {
  // User is logged in, show profile page
  usernameSpan.textContent = userData.username;
  emailSpan.textContent = userData.email;
  profilePage.style.display = "block";
} else {
  // User is not logged in, redirect to signup page
  window.location.href = "index.html";
}

// Logout functionality
logoutBtn.addEventListener("click", function () {
  // Clear local storage and redirect to signup page
  localStorage.removeItem("userData");
  window.location.href = "index.html";
});

// Function to generate a random 16-byte access token
function generateAccessToken() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}
