export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear previous content

  const contactDiv = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  const description = document.createElement("p");
  description.textContent = "Reach out to us!";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(description);
  content.appendChild(contactDiv);
}
