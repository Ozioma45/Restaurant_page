export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("main");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const headline = document.createElement("h2");
  headline.textContent = "Meet, Eat and Enjoy True Taste";

  const imgCont = document.createElement("div");
  imgCont.classList.add("hero-image");

  const image = document.createElement("img");
  image.src = "../src/pnge.png";

  homeDiv.appendChild(heroText);
  heroText.appendChild(headline);
  homeDiv.appendChild(imgCont);
  imgCont.appendChild(image);
  content.appendChild(homeDiv);
}
