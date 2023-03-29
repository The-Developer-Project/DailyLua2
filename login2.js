fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const form = document.querySelector('form');
    const submit = document.querySelector('#submit');
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    data.name = nameInput.value;
    const jsonString = JSON.stringify(data);
    const fs = require('fs');
              const filePath = 'data.json';
              fs.writeFile(filePath, jsonString, (error) => {
                if (error) {
                  console.error(error);
                  return;
                }
                console.log('Data saved to file');
                window.location.href = "./question.html";
              });
    });
  })
  .catch(error => console.error(error));