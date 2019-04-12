//Assigns DOM values to HTML elements
const userNameInput = document.getElementById('userName');
const programmeNameInput = document.getElementById('programmeName');
const descriptionInput = document.getElementById('description');
const lengthInput = document.getElementById('length');
const continuityInput = document.getElementById('continuity');
const submitButton = document.getElementById('submit');

//display items
const displayProgrammeName = document.getElementById('displayProgrammeName');
const displayDescription = document.getElementById('displayDescription');
const displayLength = document.getElementById('displayLength');
const displayContinuity = document.getElementById('displayContinuity');
const displayUserName = document.getElementById('displayUserName');

window.addEventListener('load', () => {
  console.log('loaded');
  databaseRequest();
});
//Requests the Database JSON object in the back-end
const databaseRequest = () => {
  const url = '/getData';

  fetch(url)
    .then(response => response.json())
    .then(json => responseToFrontend(json));
};

const pName = (json, item, domItem) => {
  json.map(x => {
    const p = document.createElement('P');
    p.className = 'tableItemStyle';
    var textnode = document.createTextNode(`${x[item]}`);
    p.appendChild(textnode);
    domItem.appendChild(p);
  });
};
//Populates html with new elements from response
const responseToFrontend = json => {
  console.log(json);
  pName(json, 'programme_name', displayProgrammeName);
  pName(json, 'description', displayDescription);
  pName(json, 'length', displayLength);
  pName(json, 'continuity', displayContinuity);
  // pName(json, 'name', displayUserName);
};
