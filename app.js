// Hero role change
const niche = ["an Influencer", "a Model.", "an On-Air Personality."];

var elem =$(".niche");
var currentWord = -1; //3

window.setInterval(function(){
 currentWord++;
 if(currentWord > niche.length) {
  currentWord = 0;
 }
  elem.text(niche[currentWord])
}, 3000);



document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-items').classList.toggle('active');
  });


  

// Testimonials

const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});


// Mail to function
function sendMail() {
  const email = "ayoprincess541@gmail.com"; // Replace with your email
  const subject = "Collaboration Inquiry";
  const body = "Hey, I need your services.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}