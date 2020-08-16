import ProjectElement from './ProjectElement'

const ProjectsContainer = document.getElementById('projects')

let projects = [
  {
    id: '1',
    image: './assets/img/codenotes.png',
    title: 'CodeNote',
    link: '#',
    langs: ['nodejs', 'reactjs', 'react native']
  },
  {
    id: '2',
    image: './assets/img/mdomino.png',
    title: 'Dominos',
    link: 'https://mdomino.netlify.app/',
    langs: ['javascript']
  },
  {
    id: '3',
    image: './assets/img/takeitoff.png',
    title: 'Takeitoff',
    link: 'https://take-itoff.web.app/',
    langs: ['nodejs', 'reactjs']
  },
  {
    id: '4',
    image: './assets/img/movmusify.png',
    title: 'Musify',
    link: 'https://movmusify.herokuapp.com/',
    langs: ['javascript', 'nodejs']
  },
  {
    id: '5',
    image: './assets/img/graphcalc.png',
    title: 'Graph Drawer',
    link: 'https://graphcalc.netlify.app/',
    langs: ['javascript']
  }
]

const FilterProjects = (filterLang = false) => {
  if(!filterLang) return projects;

  const filterdProjects = projects.filter(project => project.langs.includes(filterLang))
  return filterdProjects;
}

const RenderProjects = (filterLang) => {
  const filterdProjects = FilterProjects(filterLang);

  // ProjectsContainer.innerHTML = ''

  // filterdProjects.forEach(project => {
  //   let newProject = ProjectElement(project.id, project.image, project.title, project.langs)
  //   ProjectsContainer.appendChild(newProject)
  // })

  let currentProject;
  let found;
  let FoundArray = [];
  /**
   * 
   * loop over projects needed
   * loop over ProjectsContainer children
   * compare each child with each project needed
   * if child exist push its idx to the foundArray
   * if child does exist add it and push its idx to the foundArray
   * Remove the elemnts that aren't in the foundArray
   * 
   */
  filterdProjects.forEach((project, idx) => {
    found = false;

    for(let i = 0; i < ProjectsContainer.childElementCount; i++) {
      currentProject = ProjectsContainer.children[i]
      
      if(project.id === currentProject.dataset.key) {
        found = true;
        FoundArray.push(i)
        break;
      }

    }

    if(!found) {
          let newProject = ProjectElement(project.id, project.image, project.title, project.langs, project.link);
          newProject.setAttribute('data-keep', 'true')
          ProjectsContainer.insertBefore(newProject, ProjectsContainer.children[idx])
          FoundArray.push(idx)
    }
    
  })


  /**
   * Start from last element to element 0
   * if element idx is not in found remove the element at that idx
   */
  let removingCounter = ProjectsContainer.childElementCount -1;
  while(removingCounter >= 0) {

    if(!FoundArray.includes(removingCounter)){
      ProjectsContainer.removeChild(ProjectsContainer.children[removingCounter]);
    }
    
    removingCounter--;
  }

}

export default RenderProjects;
