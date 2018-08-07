// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps) {
  //this = (Dancer.prototype)
  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // var r = Math.random() * 255;
  // var g = Math.random() * 255; 
  // var b = Math.random() * 255;
  var styleSettings = {
    top: top,
    left: left
    // 'border-color': 'rgb(' + r + ', ' + g + ', ' + b + ')'
  };
  this.$node.css(styleSettings);
};

