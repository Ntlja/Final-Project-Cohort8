var germany = document.getElementById('germany')
var france = document.getElementById('france')
var spain = document.getElementById('spain')
// var bigFacts = document.getElementById('bigFacts')
var bigFacts = document.getElementsByClassName('bigFacts')

window.onscroll = function(event){
  window.requestAnimationFrame(onScroll)
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

var bigFact1IsTransparent = true
var bigFact2IsTransparent = true

function onScroll() {
  var scroll = window.pageYOffset
  //big fact 1
  if (scroll >= 0 && scroll <= 2000 ){
    bigFact1IsTransparent = false
    fadeInBigFact(scroll, 0, 2000, bigFacts[0])
  } else if (scroll >= 2000 && scroll <= 4000){
    bigFact1IsTransparent = false
    fadeOutBigFact(scroll, 2000, 4000, bigFacts[0])
  } else if (bigFact1IsTransparent === false){
    console.log('setting 1 to 0')
    bigFact1IsTransparent = true
    bigFacts[0].style.opacity = 0
  }
  //big fact 2
  if (scroll >= 4000 && scroll <= 6000 ){
    bigFact2IsTransparent = false
    fadeInBigFact(scroll, 4000, 6000, bigFacts[1])
  } else if (scroll >= 6000 && scroll <= 8000){
    bigFact2IsTransparent = false
    fadeOutBigFact(scroll, 6000, 8000, bigFacts[1])
  } else if (bigFact2IsTransparent === false){
    console.log('setting 2 to 0')
    bigFact2IsTransparent = true
    bigFacts[1].style.opacity = 0
  }
  //scroll out co0untry names

  if (scroll >= 12000 && scroll <= 14000){
    animateCountryNamesOut(scroll, 12000, 14000)
  }
}

function animateCountryNamesOut(scroll, start, end){
  var range = end-start
  var currentPos = scroll - start
  germany.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  france.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  spain.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
}


function fadeInBigFact(scroll, start, end, elem){
    var range = end-start
    var currentPos = scroll - start
    elem.style.opacity = map(currentPos, 0,range, 0, 1)
}

function fadeOutBigFact(scroll, start, end, elem){
    var range = end-start
    var currentPos = scroll - start
    elem.style.opacity = map(currentPos, 0,range, 1, 0)
}

function animateIn(elem){
  elem.style.opacity = 1
  elem.style.transform = 'translateX(10px)'
}

function animateOut(elem){
  elem.style.opacity = 0
  elem.style.transform = 'translateX(10px)'
}

function changeColor(scroll, start, end){
	var y = scroll - start
	var range = end - start
	//you can mess around with the map function though so it does different things.
	container.style.background = 'rgb(' + mapInt(y, 0, range, 255, 0) + ',' + mapInt(y, 0, range, 255, 0) + ',' +  mapInt(y, 0, range, 255, 0) + ')'
}


function map(num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

//map int does a similar thing but always returns an integer.
function mapInt(num, inMin, inMax, outMin, outMax) {
  return Math.floor((num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin)
}
