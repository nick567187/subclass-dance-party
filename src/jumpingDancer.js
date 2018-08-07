var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 2;

  this.oldStep = Dancer.prototype.step;  
  this.isJumping = false;
  this.$node = $('<span class="dancer taco"></span>');
  this.oldStep();

};

makeJumpingDancer.prototype = Object.create(Dancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;

makeJumpingDancer.prototype.step = function() {
  this.oldStep();
  let height;
  if (this.isJumping) {
    height = 0;
  } else {
    height = 100;
  }
  this.isJumping = !this.isJumping;
  
  this.setPosition(this.top + height, this.left);
};
