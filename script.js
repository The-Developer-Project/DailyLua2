const fs = require('fs');
const submitBtn = document.getElementById('submit-btn');

console.log('started1')

submitBtn.addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const response = await fetch('url', {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  console.log(result)
  if (result['result'] === 'correct') {
    window.location.href = './correct.html';
  }
});
