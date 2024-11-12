 function toggleMenu() {
        document.querySelector('.menu-container').classList.toggle('active');
        document.querySelector('.overlay').classList.toggle('active');
    }


    $('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout:1000,
    margin:10,
    nav:false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    // Функція для відкриття модального вікна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Функція для закриття модального вікна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Закриття модального вікна при натисканні за межами вікна
window.onclick = function(event) {
    let modalHeaven = document.getElementById("modalHeaven");
    let modalSirena = document.getElementById("modalSirena");
    let modalSecondScin = document.getElementById("modalSecondScin");
    let modalSENIORA = document.getElementById("modalSENIORA");
    let modalMARIPOSA = document.getElementById("modalMARIPOSA");


    if (event.target === modalHeaven) {
        modalHeaven.style.display = "none";
    } else if (event.target === modalSirena) {
        modalSirena.style.display = "none";
    } else if (event.target === modalSecondScin) {
        modalSecondScin.style.display = "none";
    } else if (event.target === modalSENIORA) {
        modalSENIORA.style.display = "none";
    } else if (event.target === modalMARIPOSA) {
        modalMARIPOSA.style.display = "none";
    }
}


