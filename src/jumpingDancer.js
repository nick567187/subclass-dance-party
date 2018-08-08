var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.time = 1000;

  this.oldStep = Dancer.prototype.step;  
  this.isJumping = true;
  this.$node = $('<span class="dancer taco"></span>');
  this.oldStep();
  this.setPosition(this.top, this.left)
};

makeJumpingDancer.prototype = Object.create(Dancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;

makeJumpingDancer.prototype.step = function() {
  this.oldStep();
  let height;
  if (this.isJumping) {
    height = 0;
  } else {
    height = 60;
  }
  this.isJumping = !this.isJumping;
  
  this.setPosition(this.top - height, this.left);
};

