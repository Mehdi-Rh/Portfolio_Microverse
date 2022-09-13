const projects = [
  {
    title: 'Space Travellers',
    src: './images/screenshots/Snapshoot-Portfolio-4.png',
    description: "This website is an SPA  made for the company that provides commercial and scientific space travel services “SpaceX”. It allows the user to book rockets and join selected space missions using the real live data from the SpaceX API.",
    tags: ['ReactJs', 'Redux', 'Netlify'],
    seeLivelink: 'https://space-travelers-mehdirh-kayonga99.netlify.app/',
    seeSourceLink: 'https://github.com/Kayonga99/Space--Travellers',
  },
  {
    title: 'Math Magicians',
    src: './images/screenshots/Snapshoot-Portfolio-3.png',
    description: "This project is a responsive SPA that allows users to make simple calculations and read a quote.",
    tags: ['React', 'Netlify'],
    seeLivelink: 'https://math-magician-mehdi-rh.netlify.app/',
    seeSourceLink: 'https://github.com/Mehdi-Rh/Math-magicians',
  },
  {
    title: 'Fish Dish',
    src: './images/screenshots/Snapshoot-Portfolio-2.png',
    description: "This is a web application that displays only fish dishes available on the “themealdb” API and displays them into cards with the option of commenting on it.",
    tags: ['HTML', 'CSS', 'Javascript'],
    seeLivelink: 'https://mehdi-rh.github.io/Fish-dishes-Capstone/',
    seeSourceLink: 'https://github.com/Mehdi-Rh/Fish-dishes-Capstone',
  },
  {
    title: 'Conference Website',
    src: './images/screenshots/Snapshoot-Portfolio-1.png',
    description: "This project is a conference website build to showcase the activities of an event.",
    tags: ['HTML', 'CSS', 'Javascript'],
    seeLivelink: 'https://mehdi-rh.github.io/Blog-Capstone/',
    seeSourceLink: 'https://github.com/Mehdi-Rh/Blog-Capstone',
  },
];

const buttons = document.getElementsByClassName('project_btn');
const work = document.querySelector('.project');
const popup = document.createElement('section');
popup.classList.add('modal');
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
const { body } = document;

function popupShow(cardNbr) {
  body.style.overflowY = ('hidden');
  popup.style.display = ('block');
  overlay.style.display = ('block');
  work.appendChild(popup);
  work.appendChild(overlay);
  popup.innerHTML = `
    <div class='modal-body'>
      <div class='modal-head'>
        <div class="modal-top">
          <h2>${projects[cardNbr].title}</h2>
          <i id="closeBtn" class="fas fa-times" alt='#'></i>
        </div>
        <ul class="list list-pop">
        <li class="company no_bullet">Self Project</li>
        <li class="list_bullet">Front End Dev</li>
        <li class="list_bullet">2022</li>
        </ul>
        <img src="${projects[cardNbr].src}" alt="p1">
        <div class="modal-bottom">
          <p>${projects[cardNbr].description}</p>
          <div class='modal-footer'>
            <ul class="tag_list no_bullet">
              <li class="tag">${projects[cardNbr].tags[0]}</li>
              <li class="tag">${projects[cardNbr].tags[1]}</li>
              <li class="tag">${projects[cardNbr].tags[2]}</li>
            </ul>
            <div class='modal-buttons'>
            
              <button  class="pop_btn btn-effect">
                <a href="${projects[cardNbr].seeLivelink}" target="_blank">See Live</a> 
                <i class="fas fa-external-link"></i>
              </button>
              <button    class="pop_btn btn-effect ">
                <a href="${projects[cardNbr].seeSourceLink}" target="_blank">See Source</a>  
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.addEventListener('click', (event) => {
    const id = event.target.id
    if (id === 'closeBtn' || id === 'overlay') {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflowY = ('auto');
    }
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    popupShow(i);
  });
}
