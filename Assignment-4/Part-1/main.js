/* 
    Name: Ameer 
    File: Assignment 4 Part 1
    Date: 2 April 2024 
    This document is for assignment #4. 
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function makeStory() {
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    let temp = '94 fahrenheit'
    let weight = '300 pounds'
    let name = 'Bob'

    if(customName.value !== '') {
        name = customName.value;
    }

    if(document.getElementById("uk").checked) { 
        temp = `${Math.round((94 - 32) * 5/9)} centigrade`;
        weight = `${Math.round(300 * 0.0714286)} stone`;
    }

    let newStory = `It was ${temp} outside, so ${xItem} went for a walk. When they got to ${yItem}:, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
    return newStory
}

function result() {
    story.textContent = makeStory();
    story.style.visibility = 'visible';
}
