var makeChillDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = Dancer.prototype.step;  
  this.$node = $('<span class="dancer sunflower"></span>');
  this.oldStep();
  this.setPosition(this.top, this.left)

};

makeChillDancer.prototype = Object.create(Dancer.prototype);
makeChillDancer.prototype.constructor = makeChillDancer;

makeChillDancer.prototype.step = function() {
  this.oldStep();
  // this.setPosition(this.top, this.left);
};
