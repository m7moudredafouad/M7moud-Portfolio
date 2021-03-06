{/* <div class="portfolio__projects-project">
  <div class="portfolio__projects-project-img">
      <img src="./assets/img/2.jpg" alt="My Photo" />
  </div>

  <div class="portfolio__projects-project-info">
      <h1 class="heading heading-3 heading-upper portfolio__projects-project-name">Dominos</h1>
      <p class="portfolio__projects-project-lang">Javascript</p>
      <button class="btn heading-upper mt-5">View more</button>
  </div>

</div> */}
const CreateProjectElement = (key, imgSrc, projectName, projectLang, projectLink = '#') => {

  let projectContainer = document.createElement('div');
  projectContainer.setAttribute('data-key', key)
  projectContainer.className = 'portfolio__projects-project';

  let imageContainer = document.createElement('div');
  
  // Image Info
  imageContainer.className = 'portfolio__projects-project-img';
  let img = new Image()
  img.src = imgSrc;
  img.alt = 'Project Image'
  imageContainer.appendChild(img);

  // Info
  let infoContainer = document.createElement('div');
  infoContainer.className = 'portfolio__projects-project-info';

  let infoDetails = document.createElement('div');
  infoDetails.className = 'portfolio__projects-project-info--details';


  let infoH1 = document.createElement('h1');
  infoH1.className = 'heading heading-3 heading-upper portfolio__projects-project-name';
  infoH1.textContent = projectName

  let infoLang = document.createElement('p');
  infoLang.className = 'portfolio__projects-project-info--lang';
  infoLang.textContent = projectLang.join(' / ');

  infoDetails.appendChild(infoH1);
  infoDetails.appendChild(infoLang);

  let infoBtn = document.createElement('a');
  infoBtn.className = 'btn heading-upper mt-5 portfolio__projects-project-info--btn';
  infoBtn.textContent = 'View more'
  infoBtn.href= projectLink
  infoBtn.target = '_blank'

  infoContainer.appendChild(infoDetails);
  infoContainer.appendChild(infoBtn);


  projectContainer.appendChild(imageContainer)
  projectContainer.appendChild(infoContainer)

  return projectContainer
} 

export default CreateProjectElement;