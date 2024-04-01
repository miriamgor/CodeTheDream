//Random
const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");
console.log("button", button);
console.log("section", section);

button.addEventListener("click", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}

// Bengal
const url2 = "https://api.thecatapi.com/v1/images/search?breed_ids=beng";
const section2 = document.querySelector(".container2");
const button2 = document.querySelector(".btn2");
console.log("button2", button2);
console.log("section2", section2);

button2.addEventListener("click", getBengalCats);

bengalCatPhoto = (json) => {
  let photo = json[0].url2;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("bengal_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getBengalCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url2);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}

// Abyssinian
const url3 = "https://api.thecatapi.com/v1/images/search?breed_ids=abys";
const section3 = document.querySelector(".container3");
const button3 = document.querySelector(".btn3");
console.log("button3", button3);
console.log("section3", section3);

button3.addEventListener("click", getAbysCats);

abysCatPhoto = (json) => {
  let photo = json[0].url2;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("abys_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getAbysCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url3);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}
