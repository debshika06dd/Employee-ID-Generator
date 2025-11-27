// Read values from URL
const params = new URLSearchParams(window.location.search);

const empName = params.get("name");
const empDesig = params.get("desig");
const empNum = params.get("num");
const empPhoto = params.get("photo");
const empMob = params.get("mob");
const empEmail = params.get("email");


// small helper to prevent simple injection when inserting into template string:
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

//Build the card
const container = document.getElementById('cardsContainer');

const cardHtml = `
<div>
    <img id="idPhoto" src="${escapeHtml(empPhoto)}" alt="${escapeHtml(empName)}'s photo" onerror="this.src='https://via.placeholder.com/120?text=No+Image'"/>
    <h2 id="idName">${escapeHtml(empName)}</h2>
    <h3 id="idDesig">${escapeHtml(empDesig)}</h3>
    <p id="idNumber">ID No: ${escapeHtml(empNum)}</p>
    <p id="idMob">Mobile No: ${escapeHtml(empMob)}</p>
    <p id="idEmail">Email ID: ${escapeHtml(empEmail)}</p>
  </div>
`;

//Append the card to the container
container.insertAdjacentHTML('beforeend', cardHtml);



