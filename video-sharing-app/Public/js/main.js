let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')

menuIcon.addEventListener('click',responsiveSideBar)

function responsiveSideBar(){
 sidebar.classList.toggle('small-sidebar')
}