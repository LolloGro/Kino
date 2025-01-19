export default class infoContent {
  constructor(data) {
    this.data = data;
  }

  render(elem) {
    // DOM elements
    const modal = elem.querySelector('.info-modal');
    const list = elem.querySelector('.info-modal-list');
    const info = elem.querySelector('.info');

    if (info) {
      // Render text to headerSection where the main title is
      const headSection = this.data.sections[0];
      const title = elem.querySelector('.cinema-title');
      const open = elem.querySelector('.cinema-open');
      const redButton = elem.createElement('button');
      redButton.innerText = this.data.buttons[2].text;
      title.innerText = headSection.title;
      open.innerText = headSection.text;
      //
      const img = elem.querySelector('.kino-img');
      const info2 = elem.querySelector('.info-2');
      const openSection = this.data.sections[1].modal;
      const openTimes = openSection[3].open;
      const openTitle = elem.createElement('h3');
      const openPara = elem.createElement('p');
      openTitle.innerText = openSection[3].title;
      openPara.innerText = openSection[3].text;
      img.src = this.data.kinoImg.src;
      img.alt = this.data.kinoImg.alt;
      const openTimeDiv = elem.createElement('div');
      openTimeDiv.appendChild(openTitle);
      openTimeDiv.appendChild(openPara);
      openTimeDiv.setAttribute('class', 'open-div');
      openTitle.setAttribute('class', 'desktop-open-title');
      openPara.setAttribute('class', 'desktop-open-paragraph');
      openTimes.forEach((i) => {
        const activity = elem.createElement('div');
        const day = elem.createElement('p');
        const date = elem.createElement('p');
        const time = elem.createElement('p');
        activity.setAttribute('class', `open-times`);
        day.setAttribute('class', 'open-times-day');
        date.setAttribute('class', 'open-times-date');
        time.setAttribute('class', 'open-times-time');
        day.innerText = i.dag;
        date.innerText = i.datum;
        time.innerText = i.tid;
        activity.appendChild(day);
        activity.appendChild(date);
        activity.appendChild(time);
        openTimeDiv.appendChild(activity);
      });
      info2.prepend(openTimeDiv);
      info.appendChild(info2);
    }
    //
    const modalInfo = this.data.sections[1].modal;
    let i = 0;
    modalInfo.forEach((section) => {
      // If there is no text key in section
      if (section.text == undefined) {
        const question = elem.createElement('p');
        question.setAttribute('class', 'modal-title');
        question.innerText = section.title;
        // Prepend means to add it to the top of the children line
        modal.prepend(question);
        //
      } else {
        // Create elements
        const listItem = elem.createElement('li');
        const question = elem.createElement('p');
        const answer = elem.createElement('p');
        const openBtn = elem.createElement('img');
        // Set class attribute to elements
        listItem.setAttribute('class', 'modal-item-' + i);
        i++;
        question.setAttribute('class', 'modal-question');
        answer.setAttribute('class', 'modal-answer');
        openBtn.setAttribute('class', 'modal-open');
        // Use JSON data to render text to elements
        question.innerText = section.title;
        answer.innerText = section.text;
        answer.style.display = 'none';
        openBtn.src = this.data.buttons[0].openButton;
        openBtn.alt = this.data.buttons[0].alt;
        // Append to list
        listItem.appendChild(openBtn);
        listItem.appendChild(question);
        // Add event listener to img button
        openBtn.addEventListener('click', () => {
          openBtn.classList.toggle('open-button-clicked');
          if (openBtn.className === 'modal-open open-button-clicked') {
            openBtn.src = this.data.buttons[1].closeButton;
            openBtn.alt = this.data.buttons[1].alt;
            answer.style.display = '';
          } else {
            openBtn.src = this.data.buttons[0].openButton;
            openBtn.alt = this.data.buttons[0].alt;
            answer.style.display = 'none';
          }
        });
        question.addEventListener('click', () => {
          openBtn.classList.toggle('open-button-clicked');
          if (openBtn.className === 'modal-open open-button-clicked') {
            openBtn.src = this.data.buttons[1].closeButton;
            openBtn.alt = this.data.buttons[1].alt;
            answer.style.display = '';
          } else {
            openBtn.src = this.data.buttons[0].openButton;
            openBtn.alt = this.data.buttons[0].alt;
            answer.style.display = 'none';
          }
        });
        // If there's a key named 'open'
        if ('open' in section) {
          // Go through the 'open'-section
          section.open.forEach((i) => {
            const day = elem.createElement('p');
            const date = elem.createElement('p');
            const time = elem.createElement('p');
            const activity = elem.createElement('div');
            activity.setAttribute('class', `open-times`);
            day.setAttribute('class', 'open-times-day');
            date.setAttribute('class', 'open-times-date');
            time.setAttribute('class', 'open-times-time');
            day.innerText = i.dag;
            date.innerText = i.datum;
            time.innerText = i.tid;
            activity.appendChild(day);
            activity.appendChild(date);
            activity.appendChild(time);
            answer.appendChild(activity);
            listItem.appendChild(answer);
            list.appendChild(listItem);
          });
        }
        // Skip the whole open times elements and text if there is no 'open' key
        else {
          listItem.appendChild(answer);
          list.appendChild(listItem);
        }
      }
    });
  }
}