export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("head2");
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae";

  const contactList = document.createElement("ul");

  const contactItemTexts = [
    "08166365570",
    "oziomaegole@gmail.com",
    "www.ozibest.com",
  ];

  contactItemTexts.forEach((itemText) => {
    const contactItem = document.createElement("li");
    contactItem.textContent = itemText;
    contactList.appendChild(contactItem);
  });

  contactDiv.appendChild(headline);
  contactDiv.appendChild(description);
  contactDiv.appendChild(contactList);

  content.appendChild(contactDiv);
}
