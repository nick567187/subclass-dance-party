$(document).ready(function() {
  window.dancers = [];
  
  $('.popUpContainer').hover(function(event) {
      console.log('in')
    $('.explosion').css('display', 'block');
  }, function(event) {
     console.log('out');
    $('.explosion').css('display', 'none');
  });


  $('.lineUpDancers').on('click', function(event) {
    var spaceBtwn = 20;
    let styleSettings = {
      'transition': 'width 1s, height 1s, top 1s, left 1s',
    }

    for(let dancer of dancers) {
      let oldTop = dancer.top;
      let oldLeft = dancer.left;
      dancer.top = 500;
      dancer.left = spaceBtwn;
      dancer.$node.css(styleSettings);
      dancer.setPosition(dancer.top, dancer.left)
      spaceBtwn += 100;
      setTimeout(() => {
        dancer.top = oldTop;
        dancer.left = oldLeft;
        dancer.$node.css('transition', 'width 1s, height 1s');
        dancer.setPosition(dancer.top, dancer.left)
      }, 10000)
    }
  })

  $('.neighborShowDown').on('click', function(event) {
      let randomDancer = window.dancers[Math.floor(Math.random() * window.dancers.length)];
      let neighbors = {};
      let distanceArr = [];
      for(let dancer of dancers) {
        let a = Math.abs(dancer.top - randomDancer.top);
        let b = Math.abs(dancer.left - randomDancer.left);
        let distance = Math.sqrt(a*a + b*b);
        neighbors[distance] = dancer;
        distanceArr.push(distance);
      }
      distanceArr.sort(function(a, b){return a - b});
      
      var styleSettings = {
        'height': '550',
        'width': '550',
         'webkit-animation': 'spin1 4s linear infinite',
        '-moz-animation': 'spin1 4s linear infinite',
        'animation': 'spin1 3s ease infinite',
        'animation-delay': '0.5s',
        'filter': 'invert(100%)',
      }

      var backgroundDancerSettings = {
      }

      for(let i = Math.floor(window.dancers.length/3); i < distanceArr.length; i++) {
        neighbors[distanceArr[i]].$node.css(backgroundDancerSettings);
      }
    
      for(let i = 0; i < window.dancers.length/3; i++) {
        
        neighbors[distanceArr[i]].$node.css(styleSettings);  
      }

      var oldStyleSettings = {
        'height': '250',
        'width': '300',
        'webkit-animation': 'none',
        '-moz-animation': 'none',
        'animation': 'none',
        'animation-delay': 'none',
        'filter': 'none'
      }

      var oldBackgroundDancerSettings = {
        filter: 'none'
      }

      setTimeout(() => {

        for(let i = Math.floor(window.dancers.length/3); i < distanceArr.length; i++) {
          neighbors[distanceArr[i]].$node.css(oldBackgroundDancerSettings)
        }
        for(let i = 0; i < window.dancers.length/3; i++) {
          neighbors[distanceArr[i]].$node.css(oldStyleSettings);  
        }
      }, 6000)
     
     


    
    });
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var snd = new Audio("7.ogg");
    var dancer = new dancerMakerFunction(
      ($("body").height() * Math.random())/2 + $("body").height()/2 - 300,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if(dancers.length < 19) {
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      snd.play();
    }
  });
});

