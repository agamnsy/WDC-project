const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const language = document.getElementById('language');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;

const btnFav = document.getElementsByClassName('btn-fav');
const love = document.getElementsByClassName('love');
const check = document.getElementsByClassName('check');

const btnFavLg = document.getElementsByClassName('btn-fav-lg');
const loveLg = document.getElementsByClassName('love-lg');
const textLg = document.getElementsByClassName('btn-text');
const checkLg = document.getElementsByClassName('check-lg');

function handleFavClick(btnFav, love, check, cardId) {
    btnFav.addEventListener('click', function () {
        if (check.checked) {
            localStorage.setItem(`isFavorited_${cardId}`, "true");
            love.classList.add('fa-solid', 'text-red-700');
            love.classList.remove('fa-regular', 'text-slate-600');
        } else {
            localStorage.removeItem(`isFavorited_${cardId}`);
            love.classList.add('fa-regular', 'text-slate-600');
            love.classList.remove('fa-solid', 'text-red-700');
        }
    });
}

function handleFavClick(btnFavLg, loveLg, checkLg, cardId) {
    btnFavLg.addEventListener('click', function () {
        if (checkLg.checked) {
            localStorage.setItem(`isFavorited_${cardId}`, "true");
            loveLg.classList.add('fa-solid', 'text-red-700');
            loveLg.classList.remove('fa-regular', 'text-slate-600');
        } else {
            localStorage.removeItem(`isFavorited_${cardId}`);
            loveLg.classList.add('fa-regular', 'text-slate-600');
            loveLg.classList.remove('fa-solid', 'text-red-700');
        }
    });
}

Array.from(btnFav).forEach((button, index) => {
    const cardId = button.closest('.card').dataset.id; 
    handleFavClick(button, love[index], check[index], cardId);
});

Array.from(btnFavLg).forEach((button, index) => {
    const cardId = button.closest('.btn-fav-lg').dataset.id; 
    handleFavClick(button, loveLg[index], checkLg[index], cardId);
});


for (let i = 0; i < btnFav.length; i++) {
    const cardId = btnFav[i].closest('.card').dataset.id;
    const isFavorited = localStorage.getItem(`isFavorited_${cardId}`);
    if (isFavorited === "true") {
        check[i].checked = true;
    }

    if (check[i].checked) {
        love[i].classList.add('fa-solid', 'text-red-700');
        love[i].classList.remove('fa-regular', 'text-slate-600');
    } else {
        love[i].classList.remove('fa-solid', 'text-red-700');
    }
}
for (let i = 0; i < btnFavLg.length; i++) {
    const cardId = btnFavLg[i].closest('.btn-fav-lg').dataset.id;
    const isFavorited = localStorage.getItem(`isFavorited_${cardId}`);
    if (isFavorited === "true") {
        checkLg[i].checked = true;
    }

    if (checkLg[i].checked) {
        loveLg[i].classList.add('fa-solid', 'text-red-700');
        loveLg[i].classList.remove('fa-regular', 'text-slate-600');
    } else {
        loveLg[i].classList.remove('fa-solid', 'text-red-700');
    }
}

const navActive = document.getElementsByClassName('nav-active');

window.addEventListener('scroll', function () {
    const scrollPosition = this.scrollY;
    const isScrolled = scrollPosition > homeHeight;
    const screenWidth = window.innerWidth;

    nav.style.backgroundColor = isScrolled ? 'white' : 'transparent';
    logo.style.color = isScrolled ? 'black' : 'white';


    nav.style.boxShadow = isScrolled ? '0px 4px 10px -2px rgba(0,0,0,0.1)' : 'none';
    
    // Menetapkan warna teks berdasarkan lebar layar
    if (screenWidth < 768) {
        // Jika lebar layar kurang dari 768px (mobile)
        navActive.style.color = isScrolled ? 'black' : 'black';
        language.style.color = isScrolled ? 'black' : 'white';
        humberger.style.color = isScrolled ? 'black' : 'white';
    } else {
        // Jika lebar layar 768px atau lebih (desktop)
        // navActive.style.color = 'blue';
        
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = isScrolled ? 'blue' : 'blue';
    
            text[i].addEventListener('mouseenter', function(e){
                text[i].style.color = isScrolled ? 'blue' : 'blue';
            })
        
            text[i].addEventListener('mouseleave', function(e){
                text[i].style.color = isScrolled ? 'black' : 'white';
            })
        }

        language.style.color = isScrolled ? 'black' : 'white';
        humberger.style.color = isScrolled ? 'black' : 'white';
    }

    language.addEventListener('mouseenter', function(e){
        language.style.color = isScrolled ? 'white' : 'white';
    });

    language.addEventListener('mouseleave', function(e){
        language.style.color = isScrolled ? 'black' : 'white';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const empty = document.getElementById('content-section');
    const destination = document.getElementById('destination-section');

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const cardId = parseInt(card.getAttribute('data-id'));
        const storageKey = `isFavorited_${cardId}`;
        const isFavorited = localStorage.getItem(storageKey);

        if (isFavorited === 'true') {
            destination.classList.remove("hidden");
            card.classList.remove("hidden");
            empty.classList.add("hidden");
        } else if (isFavorited === 'false'){
            empty.classList.remove("hidden");
            destination.classList.add("hidden");
        }
    });
});

