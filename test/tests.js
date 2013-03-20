describe('on-body', function () {

  var onBody, assert = require('component-assert');

  it('should callback only when the body exists', function (done) {
    // Remove the body to start.
    var body = document.body;
    body.parentNode.removeChild(body);

    // Require the module late, so that the body doesn't exist when we do.
    onBody = require('on-body');

    var called = false;
    var callback = function () { called = true; };
    onBody(callback);

    // Don't assert unless we need to, since Mocha tries to do stuff to the body
    // on asserting.
    if (called !== false) assert(false);

    // Re-add the body, but it still shouldn't be called.
    document.head.parentNode.appendChild(body);
    assert(called === false);

    // After the interval has passed, it should be called.
    setTimeout(function () {
      assert(called === true);
      done();
    }, 10);
  });

  it('should callback immediately if the body already exists', function () {
    var called = false;
    var callback = function () { called = true; };
    onBody(callback);
    assert(called === true);
  });

  it('should callback with the body element', function () {
    var arg;
    var callback = function (body) { arg = body; };
    onBody(callback);
    assert(arg === document.body);
  });

});