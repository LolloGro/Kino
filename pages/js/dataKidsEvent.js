export default class dataKidsEvent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {
    const event = elem.querySelector('.article-party');

    this.data.kalas.forEach((events) => {
      const eventDiv = elem.createElement('div');
      eventDiv.classList.add('party-div');
      event.append(eventDiv);

      const eventImg = elem.createElement('img');
      eventImg.classList.add('party-img');
      eventImg.src = events.image;
      eventImg.alt = events.imageAlt;
      eventDiv.append(eventImg);

      const eventStyling = elem.createElement('div');
      eventStyling.classList.add('party-styling');
      eventDiv.append(eventStyling);

      const eventHeader = elem.createElement('h2');
      eventHeader.classList.add('party-header');
      eventHeader.innerText = events.titel;
      eventStyling.append(eventHeader);

      const eventText = elem.createElement('p');
      eventText.classList.add('party-text');
      eventText.innerText = events.description;
      eventStyling.append(eventText);

      const eventUl = elem.createElement('ol');
      eventUl.classList.add('party-list');
      eventStyling.append(eventUl);

      const content = events.content;

      content.forEach((list) => {
        const eventLi = elem.createElement('li');
        eventLi.classList.add('party-listItem');
        eventLi.innerText = list;
        eventUl.append(eventLi);
      });

      const eventButton = elem.createElement('button');
      eventButton.classList.add('party-button');
      eventButton.innerText = events.book;
      eventStyling.append(eventButton);
    });
  }
}