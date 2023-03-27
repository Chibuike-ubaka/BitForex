

 // Function used to shrink nav bar removing paddings and adding black background 
  
 $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});


$('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});

//functionallity for the about section
const memberImages = document.querySelectorAll('.member img');

memberImages.forEach(image => {
image.addEventListener('mouseover', () => {
image.style.transform = 'scale(1.1)';
image.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
});

image.addEventListener('mouseout', () => {
image.style.transform = 'scale(1)';
image.style.boxShadow = 'none';
});
});



// Enable offcanvas toggling
var offcanvasElement = document.querySelector('#offcanvasNavbar')
var offcanvas = new bootstrap.Offcanvas(offcanvasElement)




// Accordion functionality for FAQS
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
const button = item.querySelector('.accordion-button');

button.addEventListener('click', () => {
// Toggle the 'collapsed' class on the button
button.classList.toggle('collapsed');

// Toggle the 'show' class on the accordion body
const accordionBody = item.querySelector('.accordion-collapse');
accordionBody.classList.toggle('show');
});
});

let faqTogglers = document.querySelectorAll('.accordion-button');

faqTogglers.forEach(function(toggler) {
toggler.addEventListener('click', function() {
this.classList.toggle('collapsed');
});
});



//Trusted partner section
// Use the following JavaScript code to add an animation when the user scrolls to the partnership section

// Get the partnership section element
const partnershipSection = document.querySelector('#partnership');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
// Get the top position of the partnership section relative to the document
const partnershipSectionTop = partnershipSection.getBoundingClientRect().top;

// Get the height of the window
const windowHeight = window.innerHeight;

// If the top position of the partnership section is less than the window height, it is in view
if (partnershipSectionTop < windowHeight) {
// Add a class to the partnership section element to trigger the animation
partnershipSection.classList.add('animate__animated', 'animate__fadeInUp');
}
});



//Count section
// set the target numbers
const registeredUsersTarget = 10000;
const countriesSupportedTarget = 50;
const amountInvestedTarget = 500;
const amountPaidTarget = 100;

// get the elements
const registeredUsersCount = document.getElementById('registered-users');
const countriesSupportedCount = document.getElementById('countries-supported');
const amountInvestedCount = document.getElementById('amount-invested');
const amountPaidCount = document.getElementById('amount-paid');

// set the initial values
let registeredUsersValue = 0;
let countriesSupportedValue = 0;
let amountInvestedValue = 0;
let amountPaidValue = 0;

// set the update interval (in milliseconds)
const updateInterval = 50;

// create the update function
function updateCounters() {
// update registered users
registeredUsersValue += Math.ceil((registeredUsersTarget - registeredUsersValue) / 100);
registeredUsersCount.innerText = registeredUsersValue.toLocaleString();

// update countries supported
countriesSupportedValue += Math.ceil((countriesSupportedTarget - countriesSupportedValue) / 100);
countriesSupportedCount.innerText = countriesSupportedValue.toLocaleString();

// update amount invested
amountInvestedValue += Math.ceil((amountInvestedTarget - amountInvestedValue) / 100);
amountInvestedCount.innerText = amountInvestedValue.toLocaleString();

// update amount paid to customers
amountPaidValue += Math.ceil((amountPaidTarget - amountPaidValue) / 100);
amountPaidCount.innerText = amountPaidValue.toLocaleString();

// check if all targets have been reached
if (registeredUsersValue >= registeredUsersTarget &&
countriesSupportedValue >= countriesSupportedTarget &&
amountInvestedValue >= amountInvestedTarget &&
amountPaidValue >= amountPaidTarget) {
// stop the update interval
clearInterval(interval);
}
}

// start the update interval
const interval = setInterval(updateCounters, updateInterval);











// Affiliate section
// Get elements for 
const affiliateLinkInput = document.getElementById('affiliate-link');
const copyLinkBtn = document.getElementById('copy-link-btn');
const numReferralsSpan = document.getElementById('num-referrals');
const totalEarnedSpan = document.getElementById('total-earned');

// Generate affiliate link
const affiliateLink = generateAffiliateLink();
affiliateLinkInput.value = affiliateLink;

// Add event listeners
copyLinkBtn.addEventListener('click', copyAffiliateLink);

// Dummy data for demo purposes
const numReferrals = 10;
const totalEarned = 1000;

// Update affiliate statistics
numReferralsSpan.innerText = numReferrals;
totalEarnedSpan.innerText = '$' + totalEarned;

// Function to generate affiliate link
function generateAffiliateLink() {
// Replace with actual affiliate link generator logic
return 'https://www.bitforex.com/register?ref=123456';
}

// Function to copy affiliate link to clipboard
function copyAffiliateLink() {
affiliateLinkInput.select();
affiliateLinkInput.setSelectionRange(0, 99999); // For mobile devices
document.execCommand('copy');
alert('Affiliate link copied to clipboard!');
}

// Function to show/hide affiliate dashboard
function toggleAffiliateDashboard() {
const affiliateDashboard = document.getElementById('affiliate-dashboard');
affiliateDashboard.classList.toggle('d-none');
}

// Add event listener to toggle button
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', toggleAffiliateDashboard)