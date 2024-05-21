export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear previous content

  const menuDiv = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Menu";
  const description = document.createElement("p");
  description.textContent = "Our delicious menu.";

  menuDiv.appendChild(headline);
  menuDiv.appendChild(description);
  content.appendChild(menuDiv);
}
