const projects = [
  {
    title: 'Tonic',
    src: './images/works/Snapshoot-Portfolio-1.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags : ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#'
  },
  {
    title: 'Multi-Post Stories',
    src: './images/works/Snapshoot-Portfolio-2.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags : ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#' 
  },
  {
    title: 'Tonic',
    src: './images/works/Snapshoot-Portfolio-3.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags : ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#' 
  },
  {
    title: 'Multi-Post Stories',
    src: './images/works/Snapshoot-Portfolio-4.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags : ['html', 'css', 'javascript'],
    seeLivelink: '#',
    seeSourceLink: '#' 
  }
]

const buttons = document.getElementsByClassName('project_btn');
const work = document.querySelector('.project');
const popup = document.createElement('section')
popup.classList.add('modal');

function popupShow(cardNbr) {
  popup.style.display = ('block');
  work.appendChild(popup);
  popup.innerHTML = `
    <div class='modal-head'
      <div class="modal-top">
        <h2>${projects[cardNbr].title}</h2>
        <i id="closeBtn" class="fas fa-times" alt='#'></i>
      </div>
      <ul class="list">
        <li class="company no_bullet">CANOPY</li>
        <li class="list_bullet">Back End Dev</li>
        <li class="list_bullet">2015</li>
      </ul>
      <div class="image">
        <img src="${projects[cardNbr].src}" alt="p1">
      </div>
      <div class="modal-bottom">
        <p>${projects[cardNbr].description}</p>
        <div class='modal-footer'>
          <ul class="tag_list no_bullet">
            <li class="tag">${projects[cardNbr].tags[0]}</li>
            <li class="tag">${projects[cardNbr].tags[1]}</li>
            <li class="tag">${projects[cardNbr].tags[2]}</li>
          </ul>
          <div class='modal-buttons'>
            <button href="${projects[cardNbr].seeLivelink}"class="btn-effect ">See Project</button>
            <button href="${projects[cardNbr].seeSourceLink} class="btn-effect ">See Project</button>
          </div>
        </div>
      </div>
    </div>
  `
  document.addEventListener('click', (event) => {
    if (event.target.id === "closeBtn") {
      popup.style.display = 'none'
    }
  });
}

for (let i = 0 ; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    popupShow(i);
  })
}
