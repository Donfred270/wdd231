const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = new Date().getFullYear();

document.getElementById('last-modified').textContent = document.lastModified;