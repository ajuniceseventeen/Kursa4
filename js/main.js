// Меню бургер //
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Показать меню //
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// Скрыть меню //
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Убрать меню бургер(при нажатии на ссылку) //
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// смена фона при скролле //
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// скролл ап кнопка //
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// фильтр постов //

$(document).ready(function() {
    $(".filter-item").click(function() {
        var value = $(this).attr('data-filter')
        if (value == "all") {
            $(".post-box").show("1000")
        }
        else {
            $(".post-box").not('.'+value).hide("3000");
            $(".post-box").filter('.'+value).show("3000");
        }
    });
    $(".filter-item").click(function() {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
