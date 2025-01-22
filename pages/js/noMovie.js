export default class noMovieExist {
  constructor(data) {
    this.data = data;
  }

  render(elem) {

    const wrongSearch = elem.querySelector('.noMovie');
    const wrongText = elem.createElement('p');
    wrongText.classList.add('noText');
    wrongText.innerText = this.data.noResult;
    wrongSearch.append(wrongText);
  }
}