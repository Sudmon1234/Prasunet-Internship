document.addEventListener('DOMContentLoaded', () => {
  const places = [
    "Victoria Memorial", "Howrah Bridge", "Indian Museum",
    "Dakshineswar Kali Temple",
    "St. Paul's Cathedral",  "Birla Planetarium",
    "Science City", "Eden Gardens", "Park Street",
  ];
  let index = 0;

  const changeContain = document.querySelector('.change_contain');

  function changeText() {
    changeContain.textContent = places[index];
    index = (index + 1) % places.length;
  }

  setInterval(changeText, 2000); 
  changeText(); 
});
