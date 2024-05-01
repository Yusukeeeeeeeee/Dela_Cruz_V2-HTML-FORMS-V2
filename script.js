function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

var aboutLink = document.querySelector('.footer-links li:first-child a');

aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    openAboutModal(); 
});


function openOrderPopup() {
    document.getElementById('orderPopup').style.display = 'block';
}


function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
}


var orderNowButton = document.querySelector('.navigation li:nth-child(2) a');

orderNowButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    openOrderPopup();
});


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    
    
    console.log('Order submitted.'); 
    
    closeOrderPopup(); 
});


function openOrderPopup() {
    document.getElementById('orderPopup').style.display = 'block';
}


function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
}


document.getElementById('closeOrderPopupBtn').addEventListener('click', function(event) {
    closeOrderPopup(); 
});


var orderNowButton = document.querySelector('.navigation li:nth-child(2) a');

orderNowButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    openOrderPopup(); 
});


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    
    console.log('Order submitted.'); 
    
    closeOrderPopup(); 
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000);
}

showSlides();

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 1) { slideIndex = totalSlides }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
});


document.getElementById('productName').addEventListener('change', function(event) {
    const selectedProduct = this.value;
    console.log('Selected Product:', selectedProduct);
});

function openOrderPopup(productName) {
    document.getElementById('orderPopup').style.display = 'block';
    document.getElementById('productNameDropdown').value = productName;
}

function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
}

function openOrderPopup(productName) {
    document.getElementById('orderPopup').style.display = 'block';
    document.getElementById('productNameDropdown').value = productName;
}

function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
}
