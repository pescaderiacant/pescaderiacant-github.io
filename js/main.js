const menuBtn = document.getElementById('menuBtn');
const headerContent = document.querySelector('.header-content');
const languageDiv = document.getElementById('languageDiv');
const languageMenu = document.getElementById('languageMenu')
menuBtn.addEventListener('click', ()=>{
    headerContent.classList.toggle('show');
    languageMenu.classList.remove('show-language-menu')
})

// const languageInput = document.getElementById('languageInput');
// languageInput.addEventListener('click', ()=>{
//     if (location.pathname == '')location.pathname = 'eu/';
//     else if (location.pathname == '/eu/index.html') location.pathname = '/index.html'
//     else if (location.pathname == '/nuestra-historia/index.html') location.pathname = 'eu/gure-historia/index.html'     else if (location.pathname == '/eu/gure-historia/index.html') location.pathname = 'nuestra-historia/index.html'
// })


languageDiv.addEventListener('click', ()=>{
    languageMenu.classList.toggle('show-language-menu')
})
languageMenu.addEventListener('click',()=>{
    if (location.pathname == '/index.html')location.pathname = '/eu/index.html';
    else if (location.pathname == '/eu/index.html') location.pathname = '/index.html'
    else if (location.pathname == '/nuestra-historia/index.html') location.pathname = 'eu/gure-historia/index.html';
    else if (location.pathname == '/eu/gure-historia/index.html') location.pathname = 'nuestra-historia/index.html'
})