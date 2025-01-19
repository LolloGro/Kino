export default class footerContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {

    const footer = elem.querySelector('.footer-container');

    const sectionsContainer = elem.createElement('div');
    sectionsContainer.classList.add('sections-container');

    this.data.footer.sections.forEach((section) => {
      const sectionDiv = elem.createElement('section');
      sectionDiv.classList.add('footer-section');

      const sectionTitle = elem.createElement('h4');
      sectionTitle.textContent = section.title;
      sectionDiv.append(sectionTitle);

      const ul = elem.createElement('ul');

      if (section.contact) {
        section.contact.forEach((contact) => {
          const liEmail = elem.createElement('li');
          liEmail.textContent = `E-post: ${contact.mail}`;
          ul.append(liEmail);
          const liPhone = elem.createElement('li');
          liPhone.textContent = `Telefonnummer: ${contact.phoneNumber}`;
          ul.append(liPhone);
        });
      } else if (section.links) {
        section.links.forEach((link) => {
          const li = elem.createElement('li');

          if (link.icon) {
            const icon = elem.createElement('img');
            icon.src = link.icon;
            icon.alt = `${link.text || link.name} icon`;
            icon.classList.add('footer-icon');
            li.append(icon);
          }
          const a = elem.createElement('a');
          a.href = link.url;
          a.textContent = link.text || link.name;
          a.classList.add('footer-a');
          li.append(a);
          ul.append(li);
        });
      } else if (section.adress) {
        section.adress.forEach((address) => {
          const liStreet = elem.createElement('li');
          liStreet.textContent = address.street;
          ul.appendChild(liStreet);

          const liTown = elem.createElement('li');
          liTown.textContent = address.town;
          ul.appendChild(liTown);

          const liFindUs = elem.createElement('li');
          const aFindUs = elem.createElement('a');
          aFindUs.href = address.url;
          aFindUs.textContent = address.findUs;
          aFindUs.classList.add('footer-afind');
          liFindUs.appendChild(aFindUs);
          ul.appendChild(liFindUs);
        });
      }
      sectionDiv.append(ul);
      sectionsContainer.append(sectionDiv);
    });

    footer.append(sectionsContainer);

    const span = elem.createElement('span');
    span.classList.add('footer-logo-p');
    footer.append(span);

    const logo = elem.createElement('img');
    logo.src = this.data.footer.logo;
    logo.alt = 'Kino Bio Logo';
    logo.classList.add('footer-logo');
    span.append(logo);

    const text = elem.createElement('p');
    text.textContent = this.data.footer.text;
    text.classList.add('footer-logotext');
    span.append(text);

  }
}