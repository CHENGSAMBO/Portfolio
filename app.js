const menuToggler = document.querySelector(".icon-toggler");
const navlist = document.querySelector(".nav-lists");
menuToggler.addEventListener("click", (event) => {
  navlist.classList.toggle("show");
  event.stopPropagation(); // Prevent click from propagating to document
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (navlist.contains(event.target) || !menuToggler.contains(event.target)) {
    navlist.classList.remove("show");
  }
});

const btnSend = document.querySelector(".btn-send");

btnSend.addEventListener("click", () => {
    const name = document.getElementById("user-name").value.trim(); // Get the value inside the event
    const email = document.getElementById("user-email").value.trim(); // Get the value inside the event
    const message = document.getElementById("user-message").value.trim(); // Get the value inside the event
    alert("Your Email : "+email+"\nYour Message : "+message+"\nLove you, "+name+".");
    const nameInput=document.getElementById("user-name");
    const emailInput=document.getElementById("user-email");
    const messageInput=document.getElementById("user-message");
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";
});
