export default class headerContent {
  constructor(data) {
    this.data = data;
  }
  render(elem) {
    const navigationContainer = elem.querySelector('#navigation-menu');

    //Creates a nav element
    const nav = elem.createElement('nav');
    nav.className = 'main-nav';

    //left side of navigation with logo and name
    const leftSection = elem.createElement('div');
    leftSection.className = 'nav-left';

    const logoLink = elem.createElement('a');
    logoLink.href = '/';

    const logo = elem.createElement('img');
    logo.src = this.data.header.mainHeader.logo;
    logo.alt = this.data.header.mainHeader.alt;
    logo.className = 'nav-logo';

    logoLink.appendChild(logo);

    const brandNameLink = elem.createElement('a');
    brandNameLink.href = '/';

    const brandName = elem.createElement('span');
    brandName.className = 'brand-name';
    brandName.textContent = this.data.header.mainHeader.brandName;

    brandNameLink.appendChild(brandName);

    leftSection.appendChild(logoLink);
    leftSection.appendChild(brandNameLink);
    //the right section of the navigation meny with the hamburger menu, and its overlay on click.
    const rightSection = elem.createElement('div');
    rightSection.className = 'nav-right';

    const hamburgerBtn = elem.createElement('button');
    hamburgerBtn.className = 'hamburger-btn';
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';

    const menuOverlay = elem.createElement('div');
    menuOverlay.className = 'menu-overlay';
    menuOverlay.style.display = 'none'; //Added this just so the hamburger menu i closed by default. This will probably be handled by SCSS in the future.

    const overlayBlur = elem.createElement('div');
    overlayBlur.className = 'overlay-blur';

    const overlayLogoContainer = elem.createElement('div');
    overlayLogoContainer.className = 'overlay-logo';

    const closeBtn = elem.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    menuOverlay.appendChild(closeBtn);

    const overlayLogo = elem.createElement('img');
    overlayLogo.src = this.data.header.hamburgerMenu.menuLogo;
    overlayLogo.alt = this.data.header.mainHeader.alt;
    overlayLogo.className = 'overlay-logo';

    overlayLogoContainer.appendChild(overlayLogo);
    menuOverlay.appendChild(overlayLogoContainer);

    const menuLinks = elem.createElement('ul');
    menuLinks.className = 'menu-links';
    //This loops through each link from the JSON file, and creates <li> elements for each link. Also adds the correct text.
    this.data.header.hamburgerMenu.menuLinks.forEach((link) => {
      const menuItem = elem.createElement('li');
      const menuLink = elem.createElement('a');
      //Using a switch that adds the href attribute depending on the link text. This can be updated when we get more webpages online.
      switch (link.text) {
        case 'Om oss':
          menuLink.href = '/about';
          break;
        case 'Barnkalas':
          menuLink.href = '/kids';
          break;
        case 'Kommande filmer':
          menuLink.href = '/kommande';
          break;
        case 'Aktuella filmer':
          menuLink.href = '/aktuella';
          break;
        default:
          menuLink.href = '/coming';
      }

      menuLink.textContent = link.text;
      menuItem.appendChild(menuLink);
      menuLinks.appendChild(menuItem);
    });

    menuOverlay.appendChild(menuLinks);

    hamburgerBtn.addEventListener('click', () => {
      menuOverlay.style.display = 'block';
      overlayBlur.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      menuOverlay.style.display = 'none';
      overlayBlur.classList.remove('active');
    });

    overlayBlur.addEventListener('click', () => {
      menuOverlay.style.display = 'none';
      overlayBlur.classList.remove('active');
    });
    //appending the different elements thats been created above.
    rightSection.appendChild(menuLinks.cloneNode(true));
    rightSection.appendChild(hamburgerBtn);
    nav.appendChild(leftSection);
    nav.appendChild(rightSection);
    navigationContainer.appendChild(nav);
    navigationContainer.appendChild(menuOverlay);
    navigationContainer.appendChild(overlayBlur);
  }
}