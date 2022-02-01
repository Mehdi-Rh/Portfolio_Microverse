const projects = [
  {
    title: 'Tonic',
    src: 'images/works/Snapshoot-Portfolio-1.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."],
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-post stories',
    src: 'images/works/Snapshoot-Portfolio-2.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."],
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Tonic',
    src: 'images/works/Snapshoot-Portfolio-3.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."],
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-Post Stories',
    src: 'images/works/Snapshoot-Portfolio-4.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."],
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
];

const buttons = document.getElementsByClassName('project_btn');
const work = document.querySelector('.project');
const popup = document.createElement('section');
popup.classList.add('modal');
function popupDesk(cardNbr) {
  popup.style.display = 'block';
  work.appendChild(popup);
  popup.innerHTML = `
    <div class="modal-content">
      <div class="modal-head">
        <h2>${projects[cardNbr].title}</h2>
        <i class="fa fa-times" id="popup-close" aria-hidden="true"></i>
      </div>
      <ul class="list listPop">
        <li class="company no_bullet">CANOPY</li>
        <li class="list_bullet">Back End Dev</li>
        <li class="list_bullet">2015</li>
      </ul>

      <div class="modal-image">
      <img src=${projects[cardNbr].src} alt="App Image">
      </div>
      <div class="modal-body">
        <div class="modal-description">
          <p>${projects[cardNbr].description[0]}
        </div>
        <div class="modal-technologies">
          <ul class="tag_list no_bullet">
            <li class="tag">${projects[cardNbr].technologies[0]}</li>
            <li class="tag">${projects[cardNbr].technologies[1]}</li>
            <li class="tag">${projects[cardNbr].technologies[2]}</li>
            <li class="tag">${projects[cardNbr].technologies[3]}</li>
          </ul>
          <div class="modal-btns">
            <button  data-modal-target=".project1" class="project_btn  btn-effect " href="${projects[cardNbr].seeLiveLink}"">See Live </button>
            <button  data-modal-target=".project1" class="project_btn  btn-effect " href="${projects[cardNbr].seeSourceLink}"">See Source</button>
          </div>  
        </div>  
      </div>;`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'popup-close') {
      popup.style.display = 'none';
      document.body.style.overflow = 'scroll';
    }
  });
}

function popUpMobile(cardNbr) {
  popup.style.display = 'block';
  work.appendChild(popup);
  popup.innerHTML = `
    <div class="modal">
    <div class="modal-head">
      <h2>${projects[cardNbr].title}</h2>
        <i class="fa fa-times" id="popup-close" aria-hidden="true"></i>
    </div>
    <ul class="list listPop">
      <li class="company no_bullet">CANOPY</li>
      <li class="list_bullet">Back End Dev</li>
      <li class="list_bullet">2015</li>
    </ul>
    <div class="modal-image">
      <img src=${projects[cardNbr].src} alt="App Image">
    </div>
    <div class="modal-description">
      <p>${projects[cardNbr].description[0]}</p>
      <p>${projects[cardNbr].description[1]}</p>
    </div>
    <div class="modal-technologies">
      <ul class="tag_list no_bullet">
        <li class="tag">${projects[cardNbr].technologies[0]}</li>
        <li class="tag">${projects[cardNbr].technologies[1]}</li>
        <li class="tag">${projects[cardNbr].technologies[2]}</li>
        <li class="tag">${projects[cardNbr].technologies[3]}</li>
      </ul>
    </div>
    <div class="modal-btns">
      <button  data-modal-target=".project1" class="project_btn  btn-effect " href="${projects[cardNbr].seeLiveLink}"">See Live </button>
      <button  data-modal-target=".project1" class="project_btn  btn-effect " href="${projects[cardNbr].seeSourceLink}"">See Source</button>
    </div> 
  </div>
  `;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'popup-close') {
      popup.style.display = 'none';
      document.body.style.overflow = 'scroll';
    }
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    popupDesk(i);
    document.body.style.overflow = 'hidden';
  });
  buttons[i].addEventListener('click', () => {
    popUpMobile(i);
    document.body.style.overflow = 'hidden';
  });
}
