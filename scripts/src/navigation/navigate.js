const navList = document.getElementById('navList'); // UL
const pagesContainer = document.getElementById('pagesContainer'); // Section body

// Last page as default is home
let lastPage = 'home';

navList.addEventListener('click', (event) => {
  const listItem = event.target.closest('li');
  let nextPageFromLeft = false; // The next page from below if(true) then add pageActiveLeft else PageActiveRight 

  // If user asks for the last page don't give him any feed back
  if(listItem.dataset.divName === lastPage) return;

  
  for(let i = 0; i < pagesContainer.childElementCount; i++) {
    const bodyChild = pagesContainer.children[i]; // Page
    const sidebarChild = navList.children[i]; // NavLink


    // Remove all activating classes from sidebarChild
    sidebarChild.classList.remove('sidebar__list-active');

    // Remove all activating classes from bodyChild
    bodyChild.classList.remove('pageActiveLeft');
    bodyChild.classList.remove('pageActiveRight');


    // Check if the last page came first so i can update nextPageFromLeft
    if(!nextPageFromLeft) {
      nextPageFromLeft = bodyChild.id === lastPage;
    }
    
    // Check if this page is what user wants and add acrivating classes
    if(bodyChild.id === listItem.dataset.divName) {
      nextPageFromLeft ? bodyChild.classList.add('pageActiveRight') : bodyChild.classList.add('pageActiveLeft');
    }
  }

  // Adding activating class to nav link
  listItem.classList.add('sidebar__list-active');
  // Updating the lastPage
  lastPage = listItem.dataset.divName;

})

const aboutNavLink = document.getElementById('aboutNavLink'); // aboutNavLink -> Li
const goToAbout = document.getElementById('goToAbout'); // goToAbout -> button

goToAbout.addEventListener('click', () => {
  aboutNavLink.click()
})
