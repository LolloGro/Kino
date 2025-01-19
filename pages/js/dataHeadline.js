export default class headlineContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {
    const headerElement = elem.querySelector('.movie-headline');
    headerElement.textContent = this.data.HeadlineText;
  }
}