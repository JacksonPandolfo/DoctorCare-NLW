window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  backToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais valores vou previsar ?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //seção top chegou ou passou a linha alvo

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar ?

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionID = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.getElement('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopButtonOnScroll() {
  if (scrollY > 430) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`#home,
#home img,
#home .Pacientes,
#home .Especialistas,
#home .Anos,
#services,
#services header,
#services .card,
#about,
#about header
#about .content`)
