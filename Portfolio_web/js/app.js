// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //   active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });
  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  //   remove toggle icon and navabr when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  //   animation footer on scroll
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

//Email submission
function sendEmail() {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Prepare the email template parameters
  var templateParams = {
    from_name: fullName,
    email: email,
    phone_number: phoneNumber,
    subject: subject,
    message: message,
  };

  // Send the email using EmailJS
  emailjs.send("service_kq987vl", "template_3anihgi", templateParams).then(
    function (response) {
      console.log("Email sent successfully!", response.status, response.text);
      // Display success message or redirect to a thank-you page
      alert("Your message has been sent successfully!");
      // Reset the form
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.error("Error sending email:", error);
      // Display error message or handle the error accordingly
      alert("Oops! Something went wrong. Please try again later.");
    }
  );
}
