export default class aboutContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {

    const mainHeadlineElement = elem.querySelector('.about-main-header');
    const mainHeading = elem.createElement('h1');
    mainHeading.textContent = this.data.aboutUs;
    mainHeadlineElement.appendChild(mainHeading);

    // Headline
    const headlineElement = elem.querySelector('.about-header');
    const heading = elem.createElement('h2');
    heading.textContent = this.data.headline;
    headlineElement.appendChild(heading);

    // Sektion 1
    const section1 = elem.querySelector('.section-1');
    const heading1 = elem.createElement('h3');
    heading1.textContent = this.data.aboutPage[0].section;
    const content1 = elem.createElement('p');
    content1.textContent = this.data.aboutPage[0].content;
    section1.appendChild(heading1);
    section1.appendChild(content1);

    // Sektion 2
    const section2 = elem.querySelector('.section-2');
    const heading2 = elem.createElement('h3');
    heading2.textContent = this.data.aboutPage[1].section;
    const content2 = elem.createElement('p');
    content2.textContent = this.data.aboutPage[1].content;
    section2.appendChild(heading2);
    section2.appendChild(content2);

    // Sektion 3
    const section3 = elem.querySelector('.section-3');
    const heading3 = elem.createElement('h3');
    heading3.textContent = this.data.aboutPage[2].section;
    const content3 = elem.createElement('p');
    content3.textContent = this.data.aboutPage[2].content;
    section3.appendChild(heading3);
    section3.appendChild(content3);

    // Sektion 4
    const section4 = elem.querySelector('.section-4');
    const heading4 = elem.createElement('h3');
    heading4.textContent = this.data.aboutPage[3].section;
    const content4 = elem.createElement('p');
    content4.textContent = this.data.aboutPage[3].content;
    section4.appendChild(heading4);
    section4.appendChild(content4);
  }
}