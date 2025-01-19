export default class dataKidsContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {
    const screenWidth = screen.width;

    const contentMainHero = elem.querySelector('.div-hero');
    const info = elem.querySelector('.article-kids');

    this.data.barnkalas.forEach((content) => {

      const contentHero = elem.createElement('img');
      contentHero.classList.add('kids-hero');

      if (screenWidth < 1280) {
        contentHero.src = content.imgHero;
      } else {
        contentHero.src = content.imgHeroDesktop;
      }

      contentHero.alt = content.imgAltHero;
      contentMainHero.append(contentHero);

      const contentImg = elem.createElement('img');
      contentImg.classList.add('kids-img');

      if (screenWidth < 1280) {
        contentImg.src = content.imgTextMobile;
      } else {
        contentImg.src = content.imgTextDesktop;
      }

      contentImg.alt = content.imgAltMobile;
      contentMainHero.append(contentImg);

      const contentDiv = elem.createElement('div');
      contentDiv.classList.add('kids-div');
      info.append(contentDiv);

      const contentHeader = elem.createElement('h2');
      contentHeader.classList.add('kids-header');

      if (screenWidth < 1280) {
        contentHeader.innerText = content.titelMobile;
      } else {
        contentHeader.innerText = content.titelDesktop;
      }

      contentDiv.append(contentHeader);

      const contentButton = elem.createElement('button');
      contentButton.classList.add('kids-button');
      contentButton.innerText = content.book;
      contentButton.type = 'button';
      contentDiv.append(contentButton);

      const contentMainHeader = elem.createElement('h1');
      contentMainHeader.classList.add('kids-mainHeader');

      if (screenWidth < 1280) {
        contentMainHeader.innerText = content.mainTitelMobile;
      } else {
        contentMainHeader.style.display = 'none';
      }
      contentDiv.append(contentMainHeader);

      const contentText = elem.createElement('p');
      contentText.classList.add('kids-text');

      if (screenWidth < 1280) {
        contentText.innerText = content.descriptionMobile;
      } else {
        contentText.innerText = content.descriptionDesktop;
      }

      contentDiv.append(contentText);

    });
  }
}

