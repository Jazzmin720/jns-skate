//declare the button
const navButton= document.querySelector('button[aria-expanded]');
//create a function to grab the button
function toggleNav({target}){
    const expanded = target.getAttribute('aria-expanded') === true || false;
    navButton.getAttribute('aria-expanded', !expanded);
}
//what happens when the button is clicked
navButton.addEventListener('click', toggleNav);