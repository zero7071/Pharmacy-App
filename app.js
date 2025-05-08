let drugs = [];

function addDrug() {
  const name = document.getElementById("drugName").value;
  const stock = document.getElementById("drugStock").value;
  
  if (name && stock) {
    drugs.push({ name, stock });
    updateDrugList();
    // Clear inputs
    document.getElementById("drugName").value = "";
    document.getElementById("drugStock").value = "";
  }
}

function updateDrugList() {
  const list = document.getElementById("drugList");
  list.innerHTML = drugs.map(drug => 
    `<li>${drug.name} - Stock: ${drug.stock}</li>`
  ).join("");
}
// Register Service Worker for offline use
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker Error:', err));
}