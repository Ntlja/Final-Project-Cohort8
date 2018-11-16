var germany = document.getElementById('germany')
var france = document.getElementById('france')
var spain = document.getElementById('spain')
// var bigFacts = document.getElementById('bigFacts')
var bigFacts = document.getElementsByClassName('bigFacts')
var bigFact0 = document.getElementById('bigFact0')
var rubbishMap = document.getElementById('rubbishMap')
var plasticFacts = document.getElementsByClassName('plasticFacts')

//cirlces
var circle1Container = document.getElementById('circle1Container')
var circle2Container = document.getElementById('circle2Container')
var circle3Container = document.getElementById('circle3Container')
var circle1 = document.getElementById('redCircle1')
var circle2 = document.getElementById('redCircle2')
var circle3 = document.getElementById('redCircle3')
var line1 = document.getElementById('line1')
var line2 = document.getElementById('line2')
var line3 = document.getElementById('line3')

//solutions
var button = document.getElementById('btn')
var happyPlanet = document.getElementById('happyPlanet')
var count = 0;


window.onscroll = function(event){
  window.requestAnimationFrame(onScroll)
  // console.log('hi')
}

window.onload = function(){

  window.scrollTo(0, 0)
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
  }

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

  setTimeout(function(){
    bigFact0.style.opacity = 1
    animateIn(bigFact0)
  },1500)
}

var bigFact0IsTransparent = false
var bigFact1IsTransparent = true
var bigFact2IsTransparent = true
var bigFact3IsTransparent = true
var rubbishMapIsTransparent = true
var bigFact4IsTransparent = true
var plasticFact0IsTransparent = true
var plasticFact1IsTransparent = true
var plasticFact2IsTransparent = true
var circle1IsTransparent = true
var circle2IsTransparent = true
var circle3IsTransparent = true
var buttonIsTransparent = true
var countryPosition = true
var happyPlanetIsHidden = true

function onScroll() {

  var scroll = window.pageYOffset
  //big fact 0
  if (scroll >= 0 && scroll <= 800){
    bigFact0IsTransparent = false
    fadeOutBigFact(scroll, 0, 800, bigFact0)
  } else if (bigFact0IsTransparent === false){
    console.log('setting 1 to 0')
    bigFact0IsTransparent = true
    bigFact0.style.opacity = 0
  }
  //big fact 1
  if (scroll >= 800 && scroll <= 1200 ){
    bigFact1IsTransparent = false
    fadeInBigFact(scroll, 800, 1200, bigFacts[0])
  } else if (scroll >= 1200 && scroll <= 1600){
    bigFact1IsTransparent = false
    fadeOutBigFact(scroll, 1200, 1600, bigFacts[0])
  } else if (bigFact1IsTransparent === false){
    console.log('setting 1 to 0')
    bigFact1IsTransparent = true
    bigFacts[0].style.opacity = 0
  }
  //big fact 2
  if (scroll >= 1600 && scroll <= 2000 ){
    bigFact2IsTransparent = false
    fadeInBigFact(scroll, 1600, 2000, bigFacts[1])
  } else if (scroll >= 2000 && scroll <= 2400){
    bigFact2IsTransparent = false
    fadeOutBigFact(scroll, 2000, 2400, bigFacts[1])
  } else if (bigFact2IsTransparent === false){
    console.log('setting 2 to 0')
    bigFact2IsTransparent = true
    bigFacts[1].style.opacity = 0
  }
  // big fact 3
  if (scroll >= 2400 && scroll <= 2800){
    bigFact3IsTransparent = false
    fadeInBigFact(scroll, 2400, 2800, bigFacts[2])
  } else if (scroll >= 2800 && scroll <= 3200){
    bigFact3IsTransparent = false
    fadeOutBigFact(scroll, 2800, 3200, bigFacts[2])
  } else if (bigFact3IsTransparent === false) {
    console.log('set3')
    bigFact3IsTransparent = true
    bigFacts[2].style.opacity = 0
  }
  //scroll out co0untry names

  if (scroll >= 3200 && scroll <= 3600){
    animateCountryNamesOut(scroll, 3200, 3600)
  } else if (countryPosition === false && scroll <= 3200) {
    countryPosition = true
    $('.country').css({
      marginTop: 0
    })
  }

  //fade in rubbish
  if (scroll >= 3600 && scroll <= 6600){
    rubbishMapIsTransparent = false
    fadeInBigFact(scroll, 3600, 4200, rubbishMap)
  // } else if (scroll >= 6600 && scroll <= 7200){
  //   rubbishMapIsTransparent = false
  //   fadeOutBigFact(scroll, 6600, 7200, rubbishMap)
} else if (rubbishMapIsTransparent === false && scroll <= 3600) {
    rubbishMapIsTransparent = true
    rubbishMap.style.opacity = 0
  }
  //big fact 4
  if (scroll >= 4200 && scroll <= 4600){
    bigFact4IsTransparent = false
    fadeInBigFact(scroll, 4200, 4600, bigFacts[3])
  } else if (scroll >= 4600 && scroll <= 5200){
    bigFact4IsTransparent = false
    fadeOutBigFact(scroll, 4600, 5200, bigFacts[3])
  } else if (bigFact4IsTransparent === false) {
    console.log('set5')
    bigFact4IsTransparent = true
    bigFacts[3].style.opacity = 0
  }

  //plasticBottles
  if (scroll >= 5200 && scroll <= 6600){
    circle1IsTransparent = false
    plasticFact0IsTransparent = false
    fadeInBigFact(scroll, 5200, 5600, plasticFacts[0])
    fadeInBigFact(scroll, 5200, 5600, circle1Container)
  // } else if (scroll >= 6600 && scroll <= 7200){
  //   plasticFact0IsTransparent = false
  //   fadeOutBigFact(scroll, 6600, 7200, plasticFacts[0])
} else if (plasticFact0IsTransparent === false && scroll <= 5200) {
    console.log('bottles')
    plasticFact0IsTransparent = true
    plasticFacts[0].style.opacity = 0
    circle1buttonIsTransparent = true
    circle1Container.style.opacity = 0
  }

  // //plasticBags
  if (scroll >= 5600 && scroll <= 6600){
    circle2IsTransparent = false
    plasticFact1IsTransparent = false
    fadeInBigFact(scroll, 5600, 6200, plasticFacts[1])
    fadeInBigFact(scroll, 5600, 6200, circle2Container)
  // } else if (scroll >= 6600 && scroll <= 7200){
  //   plasticFact1IsTransparent = false
  //   fadeOutBigFact(scroll, 6600, 7200, plasticFacts[1])
} else if (plasticFact1IsTransparent === false && scroll <= 5600) {
    console.log('bags')
    plasticFact1IsTransparent = true
    plasticFacts[1].style.opacity = 0
    circle2buttonIsTransparent = true
    circle2Container.style.opacity = 0
  }

  //plasticCutlery
  if (scroll >= 6200 && scroll <= 6600){
    circle3IsTransparent = false
    fadeInBigFact(scroll, 6200, 6600, circle3Container)
    plasticFact2IsTransparent = false
    fadeInBigFact(scroll, 6200, 6600, plasticFacts[2])
  // } else if (scroll >= 6600 && scroll <= 7200){
  //   plasticFact2IsTransparent = false
  //   fadeOutBigFact(scroll, 6600, 7200, plasticFacts[2])
} else if (plasticFact2IsTransparent === false && scroll <= 6200) {
    console.log('cutlery')
    plasticFact2IsTransparent = true
    plasticFacts[2].style.opacity = 0
    circle3IsTransparent = true
    circle3Container.style.opacity = 0
  }

  if (scroll >= 6600 && scroll <= 7200){
  buttonIsTransparent = false
  fadeInBigFact(scroll, 6600, 7200, button)
// } else if (scroll >= 7200 && scroll <= 7600){
//   buttonIstransparent = false
//   fadeOutBigFact(scroll, 7200, 7600, button)
} else if (buttonIsTransparent === false && scroll <= 6600){
  buttonIsTransparent = true
  button.style.opacity = 0
}

}

$("#btn").click(function(){
    $(".animateStat").animate({
        marginTop: '-100vh',
    });
    $(".plasticFacts, #rubbishMap, #btn").animate({
        opacity: '0'
    });
    $("#optionContainer").animate({
      opacity: '1'
    })
    $("#solutionContainer1").css({
      zIndex: '-1'
    })
    $("#solutionContainer2").css({
      zIndex: '-1'
    })
    $("#solutionContainer3").css({
      zIndex: '-1'
    })
});

$("#option1").click(function(){
    $("#map2").animate({
        opacity: '0'
    });
    $("#optionContainer").animate({
      opacity: '0'
    })
    $("#solutionContainer1").animate({
      opacity: '1'
    })
    $("#solutionContainer1").css({
      zIndex: '1'
    })
});

$("#option2").click(function(){
    $("#map1").animate({
        opacity: '0'
    });
    $("#optionContainer").animate({
      opacity: '0'
    })
    $("#solutionContainer2").animate({
      opacity: '1'
    })
    $("#solutionContainer2").css({
      zIndex: '1'
    })
});

$("#option3").click(function(){
    $("#map3").animate({
        opacity: '0'
    });
    $("#optionContainer").animate({
      opacity: '0'
    })
    $("#solutionContainer3").animate({
      opacity: '1'
    })
    $("#solutionContainer3").css({
      zIndex: '1'
    })
});

$("#solutionBtn1").click(function(){
  $("#solutionContainer1").animate({
      opacity: '0'
  });
  $("#solutionContainer1").css({
    zIndex: '-1'
  })
  $("#optionContainer").animate({
    opacity: '1'
  })
});

$("#solutionBtn2").click(function(){
  $("#solutionContainer2").animate({
      opacity: '0'
  });
  $("#solutionContainer2").css({
    zIndex: '-1'
  })
  $("#optionContainer").animate({
    opacity: '1'
  })
});

$("#solutionBtn3").click(function(){
    $("#solutionContainer3").animate({
        opacity: '0'
    });
    $("#solutionContainer3").css({
      zIndex: '-1'
    })
    $("#optionContainer").animate({
      opacity: '1'
    })
});

$(".btn2").click(function(){
  count++;
  console.log(count)
  if (count === 3){
  $("#happyPlanet").show("700")
}
})


function animateCountryNamesOut(scroll, start, end){
  var range = end-start
  var currentPos = scroll - start
  germany.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  france.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  spain.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
}

function animateCirclesOut(scroll, start, end){
  var range = end-start
  var currentPos = scroll - start
  circle1.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  circle2.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  circle3.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  line1.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  line2.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
  line3.style.marginTop = map(currentPos, 0, range, 0, -100) + 'vh'
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
