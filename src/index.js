import generateJoke from "./generateJoke";
import "./styles/main.scss"
import Image from './assets/download.jfif';

const image = document.getElementById("image");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", generateJoke,false)
image.src = Image

generateJoke()



// Plugins are more powerful than loaders 

// If you want your code to be compatible with ll browser you need to use babel.