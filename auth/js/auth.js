const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('email');

document.getElementById('email').value = myParam