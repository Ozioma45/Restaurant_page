export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";
  const image = document.createElement("img");
  image.src = "../src/pnge.png";
  const description = document.createElement("p");
  description.textContent = "Best food in town. Come and enjoy!";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(image);
  homeDiv.appendChild(description);
  content.appendChild(homeDiv);
}
