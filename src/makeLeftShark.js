var makeLeftShark = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = Dancer.prototype.step;  
  this.$node = $('<span class="dancer leftShark"></span>');
  this.oldStep();
  this.setPosition(this.top, this.left);
  this.isShining = false;
};

makeLeftShark.prototype = Object.create(Dancer.prototype);
makeLeftShark.prototype.constructor = makeLeftShark;

makeLeftShark.prototype.step = function() {
  this.oldStep();
  if(this.isShining) {
    this.$node.css('filter', 'saturate(11)',
                   'opacity', '75');
  } else {
    this.$node.css('filter', 'none',
                   'opacity', 'saturate(0)');
  }
  
  this.isShining = !this.isShining;
};
