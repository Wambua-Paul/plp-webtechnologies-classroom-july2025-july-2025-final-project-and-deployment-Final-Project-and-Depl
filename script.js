// Simple image slider
let sliderIndex = 0;
const sliderImages = ["images/pexels-muverrihhanim-30600091.jpg", "images/pexels-andreas-neubauer-734874-6415077.jpg"];
const sliderElement = document.getElementById("slider-image");

function changeSliderImage() {
  sliderIndex = (sliderIndex + 1) % sliderImages.length;
  sliderElement.src = sliderImages[sliderIndex];
}
if (sliderElement) {
  setInterval(changeSliderImage, 3000); // Change every 3 seconds
}

// Form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  });
}
