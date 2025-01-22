export default class comingContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {

    const coming = elem.querySelector('.coming');
    const comingText = elem.createElement('p');
    comingText.classList.add('coming-text');
    comingText.innerText = this.data.coming;
    coming.append(comingText);
  }
}