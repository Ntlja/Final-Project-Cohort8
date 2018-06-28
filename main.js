var germany = document.getElementById('germany')
var france = document.getElementById('france')
var spain = document.getElementById('spain')

window.onscroll = function(event){
  window.requestAnimationFrame(onScroll)
  console.log(event)
  // console.log('hi')
}

window.onload = function(){
  setTimeout(function(){
  germany.style.opacity = 1
  animateIn(germany)
  },500)

  setTimeout(function(){
    france.style.opacity = 1
    animateIn(france)
  },800)

  setTimeout(function(){
    spain.style.opacity = 1
    animateIn(spain)
  },1200)
}

function onScroll() {
  var scrollPosition = window.pageYOffset
  germany.style.opacity = scrollPosition/100
  // console.log('im scrolling')
}

function animateIn(elem){
  elem.style.opacity = 1
  elem.style.transform = 'translateX(10px)'
}
