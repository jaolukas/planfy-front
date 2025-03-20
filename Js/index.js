const menuToggle = document.querySelector('.menu-toggle'); 
const navHeader = document.querySelector('.nav-header');    


function toggleMenu() {
    navHeader.classList.toggle('active');
}


menuToggle.onclick = toggleMenu;

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = 'Light Mode';
}

darkModeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeBtn.textContent = 'Dark Mode'; 
        localStorage.setItem('darkMode', 'disabled'); 
    } else {
        body.classList.add('dark-mode');
        darkModeBtn.textContent = 'Light Mode';  
        localStorage.setItem('darkMode', 'enabled'); 
    }
});