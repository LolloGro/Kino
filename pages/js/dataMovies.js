export default class movieContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {

    const movieContainer = elem.querySelector('.movie-container');

    const modal = elem.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <i class="close-button fas fa-times"></i>
        <div class="modal-body"></div>
      </div>
    `;

    elem.body.appendChild(modal);

    const modalBody = elem.querySelector('.modal-body');
    const closeModal = elem.querySelector('.close-button');

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    this.data.forEach((movie) => {
      const movieCard = elem.createElement('div');
      movieCard.classList.add('movie-card');
      movieContainer.appendChild(movieCard);

      const movieImg = elem.createElement('img');
      movieImg.src = movie.Bild;
      movieImg.alt = `Bild för ${movie.Titel}`;
      movieCard.appendChild(movieImg);

      const movieTitle = elem.createElement('h2');
      movieTitle.textContent = movie.Titel;
      movieCard.appendChild(movieTitle);

      const movieGenre = elem.createElement('p');
      movieGenre.textContent = movie.Genre;
      movieCard.appendChild(movieGenre);

      movieTitle.addEventListener('click', (event) => {
        event.stopPropagation();

        modalBody.innerHTML = `
          <p><strong>Titel:</strong> ${movie.Titel}</p>
          <p><strong>Genre:</strong> ${movie.Genre}</p>
          <p><strong>Handling:</strong> ${movie.Beskrivning}</p>
          <p><strong>Skådespelare:</strong> ${movie.Skådespelare}</p>
          <p><strong>Språk:</strong> ${movie.Språk}</p>
          <p><strong>Rating:</strong> ${movie.Rating}</p>
          <p><strong>Speltid:</strong> ${movie.Längd}</p>
          <p><strong>Rek. ålder:</strong> ${movie.RekommenderadAlder}</p>
          <p><strong>Status:</strong> ${movie.Label}</p>`;

        modal.style.display = 'block';
      });
    });
  }
}