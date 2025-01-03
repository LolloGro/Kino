import { initHeader } from './pages/index/header.js';
import { loadkids } from './pages/kids/kids.js';
import { loadMovieContent } from './pages/index/movies.js';
import { loadAbout } from './pages/about/about.js';
import { loadFooter } from './pages/index/footer.js';
import { loadInfoModal } from './pages/index/infoModal.js';

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