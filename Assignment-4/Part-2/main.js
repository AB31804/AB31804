const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */

const texts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a seashell',
    'pic3.jpg': 'Purple and white flower',
    'pic4.jpg': 'Egyptian Hyroglyphics',
    'pic5.jpg': 'Butterfly on a leaf'
}

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', texts[image]);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
