var p5_0 = new p5(function(sketch) {

  var x = 100, y = 100;

  sketch.setup = function() {
    var cnv = sketch.createCanvas(600, 400);
    cnv.class('lemon');
  };

  sketch.draw = function() {
    sketch.background(255, 0, 0);
  };
});

var p5_1 = new p5(function(sketch) {

  var x = 100, y = 100;

  sketch.setup = function() {
    var cnv = sketch.createCanvas(600, 400);
    cnv.class('grape');
  };

  sketch.draw = function() {
    sketch.background(0, 255, 0);
    sketch.fill(255);
    sketch.rect(x, y, 250, 250);
  };
});

var p5_2 = new p5(function(sketch) {

  var x = 100, y = 100;

  sketch.setup = function() {
    var cnv = sketch.createCanvas(600, 400);
    cnv.class('apple');
  };

  sketch.draw = function() {
    sketch.background(0, 0, 255);
    sketch.rect(x, y, 250, 250);
    sketch.stroke(0);
    sketch.line(0, 0, 50, 50);
  };
});
