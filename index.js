const menBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menBtn.addEventListener('click', function(){
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open')
})
