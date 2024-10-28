// popup.js - "Chuck Norris Jokes"
const API_URL = "https://api.chucknorris.io/jokes/random";

const jokeTxt = document.getElementById("joke-txt");
const jokeBtn = document.getElementById("joke-btn");


async function getNewJoke() {
  try {
    const response = await fetch(API_URL);
    if (!response?.ok) throw Error(`Could not fetch the data for that resource: ${data.message}`);
    const data = await response.json();
    const joke = data.value;
    return joke;
  } catch (error) {
    console.log(error);
  }
}

async function populateJoke() {
  jokeTxt.textContent = await getNewJoke();
}

function setActionTitle() {
  jokeBtn.textContent = "Click For New Joke";
}

function setMainTitle() {
  jokeBtn.textContent = "Chuck Norris Jokes";
}

async function onLoad() {
  await populateJoke();
  setMainTitle();
}

// Event Listener
document.addEventListener("DOMContentLoaded", onLoad);
jokeBtn.addEventListener("click", populateJoke);
jokeBtn.addEventListener("mouseover", setActionTitle);
jokeBtn.addEventListener("mouseout", setMainTitle);