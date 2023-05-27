//!============= SHOW MORE =============

let showMoreBtns = document.querySelectorAll('.show-more');

showMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let showSection = btn.previousElementSibling;
        if (showSection.classList.contains('show-extra')) {
            showSection.classList.remove('show-extra');
            btn.classList.remove('show');
            btn.lastElementChild.innerHTML = 'Show more';
        } else {
            showSection.classList.add('show-extra');
            btn.classList.add('show');
            btn.lastElementChild.innerHTML = 'Show less';
        }
    });
});

//!============== MENU BAR =============
let menuBar = document.getElementById('menu-bar');
let miniMenu = document.getElementById('mini-menu');
let mainMenu = document.getElementById('main-menu');
let mainContent = document.getElementById('main-content')
let categoryBar=document.getElementById('category-bar')

menuBar.addEventListener('click', () => {
    if (mainMenu.classList.contains('hide')) {
        mainMenu.classList.remove('hide');
        mainContent.classList.remove('expand')
        categoryBar.classList.remove('left')

    } else {
        mainMenu.classList.add('hide');
        mainContent.classList.add('expand')
        categoryBar.classList.add('left')
    }
});


