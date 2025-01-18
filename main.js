import { initHeader } from './pages/js/header.js'
import { loadkids } from './pages/js/kids.js';
import { loadMovieContent } from './pages/js/movies.js';
import { loadAbout } from './pages/js/about.js';
import { loadFooter } from './pages/js/footer.js';
import { loadInfoModal } from './pages/js/infoModal.js';

initHeader();
loadFooter();

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  loadkids();
}

const checkMovies = document.querySelector('.movie-container');

if (checkMovies) {
  loadMovieContent();
}

const checkAbout = document.querySelector('.about-main-header');

if (checkAbout) {
  loadAbout();
}

const checkInfo = document.querySelector('.information');
const checkModal = document.querySelector('.info-modal');

if (checkInfo || checkModal) {
  loadInfoModal();
}