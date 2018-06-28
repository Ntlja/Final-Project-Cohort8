var germany = document.getElementById('germany')
var france = document.getElementById('france')
var spain = document.getElementById('spain')
// var bigFacts = document.getElementById('bigFacts')
var bigFacts = document.getElementsByClass('bigFacts')

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

// function onScroll() {
//   var scrollPosition = window.pageYOffset
//   bigFacts.style.opacity = scrollPosition/500
//   // console.log('im scrolling')
// }

function animateIn(elem){
  elem.style.opacity = 1
  elem.style.transform = 'translateX(10px)'
}

function fadeOut(scroll, start, end, i){

	var y = scroll - start
	var range = end - starts

	bigFacts[i].style.opacity = 1
  //'translateX(' + mapInt(scroll, start, end, 0, 50) + 'vw)'
}


function fadeIn(scroll, start, end, i){
	var y = scroll - start
	var range = end - start

	bigFacts[i].style.opacity = 0

  //'rgb(' + mapInt(y, 0, range, 255, 0) + ',' + mapInt(y, 0, range, 255, 0) + ',' +  mapInt(y, 0, range, 255, 0) + ')'
}
