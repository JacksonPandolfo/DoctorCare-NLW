function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function teste() {
  console.log('mensagem')
}
teste()
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
