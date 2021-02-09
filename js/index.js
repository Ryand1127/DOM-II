// Your code goes here
const h1 = document.querySelector('h1');
const nav = document.querySelectorAll('nav a');
const img = document.querySelectorAll('img');
const body = document.querySelector('body');
//<h1> mouseenter, mouseleave
h1.addEventListener('mouseenter', () =>    { h1.style.color = "orange";});
h1.addEventListener('mouseleave', () =>    { h1.style.color = "black";});
//<nav> mouseover, click
for( let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseover', event => {
    nav[i].style.color = "blue" 
    event.preventDefault();
    })}
for( let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click', event => { 
    event.preventDefault();
    })}
for( let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseout', event => {
    nav[i].style.color = "black" 
    event.preventDefault();
    })}
//<img> mouseup, dblclick, mouseout, mousedown
img[0].addEventListener('click', () =>     { img[0].style.width = '600px'})
img[0].addEventListener('mouseout', () =>  { img[0].style.width = '800px'})

img[1].addEventListener('dblclick', () =>  { img[1].setAttribute('src', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg")});
img[1].addEventListener('mouseout', () =>  { img[1].setAttribute('src', "https://www.planetware.com/photos-large/VIE/vietnam-danang-beach.jpg" )});

img[2].addEventListener('mousedown', () => { img[2].setAttribute('src', "https://www.liveabout.com/thmb/Ba1L66TAvbFojqAqoYv6sNUgIbY=/1800x1200/filters:fill(auto,1)/catamaran-5c6477e346e0fb0001f2567b.jpg")});
img[2].addEventListener('mouseup', () =>   { img[2].setAttribute('src', "https://thumbs-prod.si-cdn.com/8M51U_A4BiAhkCElQrYj9UcIxwE=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/69/80/69803067-bb99-47d3-9d9d-2f7c9ececdea/istock-921302160.jpg")});
//<body> keydown, keyup
body.addEventListener('keydown', () =>     { body.style.backgroundColor = "tan", body.style.borderBottom = "none"});
body.addEventListener('keyup', () =>       { body.style.transition = "2s", body.style.backgroundColor = "white"});

