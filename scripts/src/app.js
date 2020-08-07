import './particles'
import './navigation/navigate'
import './animateName'

import RenderProjects from './projects/Projects'


// Rendering Projects
const filterList = document.getElementById('filterList')
window.addEventListener('load', RenderProjects())

filterList.addEventListener('click', (event) => {
  
  const filterLangLi = event.target.closest('li')
  
  // Add Active Class
  for(let i =0; i < filterList.childElementCount; i++) {
    filterList.children[i].classList.remove('portfolio__langs-active')
  }
  
  filterLangLi.classList.add('portfolio__langs-active')

  RenderProjects(filterLangLi.dataset.filter);


})