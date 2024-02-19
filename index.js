const checkbox = document.querySelector('.checkbox');
const navLinks = document.querySelector('.navbar__links');
// if checkbox checked open navbar
checkbox.addEventListener('click', () => {
    if(checkbox.checked){
        navLinks.style.display = 'flex';
        // navLinks.style.height = '300px';
        // navLinks.style.transition = 'height 5s ease-in-out'
        // console.log('open')
    }else{
        navLinks.style.display = 'none';
        // navLinks.style.height = '0px';
        // navLinks.style.transition = 'height 5s ease-in-out'
        // console.log('close');
    }
});