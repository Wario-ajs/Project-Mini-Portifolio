/*=============== FILTERS TABS ===============*/
const tabsProject = document.querySelector('.projects__button');
const tabsSkills = document.querySelector('.skills__button');
const projectContent = document.querySelector('.projects__content');
const skillsContent = document.querySelector('.skills__content');

tabsProject.addEventListener('click', () => {
    projectContent.classList.toggle('filters__active')
})

tabsProject.addEventListener('click', () => {
    skillsContent.classList.toggle('filters__active')
})

tabsSkills.addEventListener('click', () => {
    projectContent.classList.toggle('filters__active')
})

tabsSkills.addEventListener('click', () => {
    skillsContent.classList.toggle('filters__active')
})

/*
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filter__active')
    })
})

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
