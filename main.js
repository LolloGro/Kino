import { loadAPI } from './pages/js/loadAPI.js'
import headerContent from './pages/js/dataHeader.js';
import footerContent from './pages/js/dataFooter.js';
import infoContent from './pages/js/dataInfo.js';
import headlineContent from './pages/js/dataHeadline.js';
import movieContent from './pages/js/dataMovies.js';
import dataKidsContent from './pages/js/dataKidsContent.js';
import dataKidsEvent from './pages/js/dataKidsEvent.js';
import aboutContent from './pages/js/dataAbout.js';

const contentHeader = await loadAPI('/static/header.json');
const displayHeader = new headerContent(contentHeader);
displayHeader.render(document);

const contentFooter = await loadAPI('/static/footer.json');
const displayFooter = new footerContent(contentFooter);
displayFooter.render(document);

const checkInfo = document.querySelector('.information');
const checkModal = document.querySelector('.info-modal');

if (checkInfo || checkModal) {
  const info = await loadAPI('/static/infoModal.json');
  const contentInfo = new infoContent(info);
  contentInfo.render(document);
}

const checkMovies = document.querySelector('.movie-container');

if (checkMovies) {
  const comingMovies = await loadAPI('/static/movies.json');
  const contentMovies = new movieContent(comingMovies);
  contentMovies.render(document);

  const comingHeadline = await loadAPI('/static/moviesHeadline.json');
  const contentHeadline = new headlineContent(comingHeadline);
  contentHeadline.render(document);
}

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  const content = await loadAPI("/static/barnkalasContent.json");
  const kidsContent = new dataKidsContent(content)
  kidsContent.render(document);
}

const checkParty = document.querySelector('.article-party');

if (checkParty) {
  const party = await loadAPI('/static/barnkalasEvent.json');
  const kidsParty = new dataKidsEvent(party);
  kidsParty.render(document);
}

const checkAbout = document.querySelector('.about-main-header');

if (checkAbout) {
  const about = await loadAPI('/static/about.json');
  const contentAbout = new aboutContent(about);
  contentAbout.render(document);
}