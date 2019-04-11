//Assigns DOM values to HTML elements
const userNameInput = document.getElementById('userName');
const programmeNameInput = document.getElementById('programmeName');
const descriptionInput = document.getElementById('description');
const lengthInput = document.getElementById('length');
const continuityInput = document.getElementById('continuity');
const submitButton = document.getElementById('submit');

//Requests the Database JSON object in the back-end
const databaseRequest = values => {
  const url = '/getData';

  fetch(url)
  .then(response => response.json())
  .then(json => responseToFrontend(input, json))
};

//Populates html with new elements from response
const responseToFrontend = () = {

}
