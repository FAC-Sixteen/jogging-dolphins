//Assigns DOM values to HTML elements
const userNameInput = document.getElementById('userName');
const programmeNameInput = document.getElementById('programmeName');
const descriptionInput = document.getElementById('description');
const lengthInput = document.getElementById('length');
const continuityInput = document.getElementById('continuity');
const submitButton = document.getElementById('submit');

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

//Populates html with new elements from response
const responseToFrontend = json => {
  console.log(json);
};
