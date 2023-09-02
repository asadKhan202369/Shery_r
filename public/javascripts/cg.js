// script.js
const vehiclesContainer = document.getElementById('vehicles-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let page = 1;
const limit = 6;

async function fetchVehicles(model, page, limit) {
  try {
    const response = await fetch(`/vehicles/${model}?page=${page}&limit=${limit}`);
    const vehicles = await response.json();
    return vehicles;
  } catch (err) {
    console.error(err);
  }
}

async function renderVehicles() {
  const model = 'your-vehicle-model'; // Replace with your desired vehicle model
  const vehicles = await fetchVehicles(model, page, limit);

  vehiclesContainer.innerHTML = '';

  vehicles.forEach((vehicle) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <p>Name: ${vehicle.name}</p>
      <p>Number: ${vehicle.number}</p>
    `;
    vehiclesContainer.appendChild(card);
  });

  if (vehicles.length < limit) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

loadMoreBtn.addEventListener('click', () => {
  page++;
  renderVehicles();
});

renderVehicles();
