export default class headlineContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {
    const headerElement = elem.querySelector('.movie-headline');
    if (headerElement) {
      headerElement.textContent = this.data.HeadlineText;
    }
    const headerText = elem.querySelector('.movies-headText');
    if (headerText) {
      headerText.textContent = this.data.HeaderText;
    }
  }
}