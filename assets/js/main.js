/*=============== FILTERS TABS ===============*/
const tabsProject = document.querySelector('.projects__button');
const tabsSkills = document.querySelector('.skills__button');
const projectContent = document.querySelector('.projects__content');
const skillsContent = document.querySelector('.skills__content');

tabsProject.addEventListener('click', () => {
    projectContent.classList.add('filters__active')
})

tabsProject.addEventListener('click', () => {
    skillsContent.classList.remove('filters__active')
})

tabsSkills.addEventListener('click', () => {
    projectContent.classList.remove('filters__active')
})

tabsSkills.addEventListener('click', () => {
    skillsContent.classList.add('filters__active')
})


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
    })
})

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
