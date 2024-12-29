
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.getElementById('dropdownMenu');


hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

document.getElementById('searchBtn').addEventListener('click', function() {
  const searchIcon = document.getElementById('searchIcon');
  searchIcon.classList.toggle('active'); 
});


function showSuggestions() {
 
}     
  // ye sahi he
document.getElementById("service-form").addEventListener("submit", function(event) {
    event.preventDefault();  
    

    var zipCode = document.getElementById("zip-code").value;

    var zipPattern = /^[0-9]{5}$/;


    if (!zipPattern.test(zipCode)) {
        alert("Please enter a valid 5-digit Pakistani ZIP code.");
        return; 
    }

   
    alert("Form submitted successfully!");
  
});