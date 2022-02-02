const projects = [
  {
    title: 'Tonic',
    src: './images/works/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-Post Stories',
    src: './images/works/Snapshoot-Portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Tonic',
    src: './images/works/Snapshoot-Portfolio-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-Post Stories',
    src: './images/works/Snapshoot-Portfolio-4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#',
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
          <li class="company no_bullet">CANOPY</li>
          <li class="list_bullet ">Back End Dev</li>
          <li class="list_bullet ">2015</li>
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
              <button href="${projects[cardNbr].seeLivelink}" class="pop_btn btn-effect">See Live<i class="fas fa-external-link"></i></button>
              <button href="${projects[cardNbr].seeSourceLink}" class="pop_btn btn-effect ">See Source <i class="fab fa-github"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'closeBtn') {
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
