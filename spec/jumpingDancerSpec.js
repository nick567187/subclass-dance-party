describe('jumpingDancer', function() {

  var jumpingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpingDancer = new makeJumpingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jumpingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node jump', function() {
    expect(jumpingDancer.top).to.equal(10)
    setTimeout(function() { expect(jumpingDancer.top).to.equal(110)}, 3000);
    expect(jumpingDancer.isJumping).to.equal(true);
  });

  it('Should call it\'s ancestor\'s step function in it\'s own step function', function() {
    sinon.spy(jumpingDancer, 'oldStep');
    jumpingDancer.step();
    expect(jumpingDancer.oldStep.called).to.be.true;
  
  })
  
});

// makeJumpingDancer