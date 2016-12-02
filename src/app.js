import octodex from '../data/octodex.json';
import { knuthShuffle as shuffle } from 'knuth-shuffle';

const { title, image_url } = shuffle(octodex)[0];

const mainElement = document.getElementById('octocat-wrapper');
const imageElement = document.getElementById('octocat-image');
const titleElement = document.getElementById('octocat-name');

imageElement.setAttribute('src', image_url);
imageElement.setAttribute('alt', title);
titleElement.innerHTML = title;

window.onload = () => {
  mainElement.classList.add('show');
};
