export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear previous content

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("head2");

  const headline = document.createElement("h1");
  headline.textContent = "Menu";
  const description = document.createElement("p");
  description.textContent = "Our delicious menu.";

  const line = document.createElement("hr");

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("Menu-info");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = "../src/pngegg.png";

  const cardCont = document.createElement("div");
  cardCont.classList.add("card-content");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Smoke Fish";

  const cardDesc = document.createElement("p");
  cardDesc.textContent =
    "this is a beautiful smoke first for you ,This is a brief description of the card content. It provides";

  menuDiv.appendChild(headline);
  menuDiv.appendChild(description);
  menuDiv.appendChild(line);

  menuDiv.appendChild(menuInfo);
  menuInfo.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardCont);
  cardCont.appendChild(cardTitle);
  cardCont.appendChild(cardDesc);

  content.appendChild(menuDiv);
}
