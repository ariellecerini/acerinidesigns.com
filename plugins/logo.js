var canvas = SVG('home_logo').size('100%', '100%')
  , rect = canvas.rect(5, 5)
  , path = canvas.path("M 340,178 104,478 580,490 Z")
  , length = path.length()
  
path.fill('none').stroke({width:1, color: '#ccc'}).move(10,10).scale(0.5)
path.animate(3000).rotate(365).loop();

rect.animate(5000, '<>').during(function(pos, morph, eased){
    var m = path.matrixify()
    var p = new SVG.Point(path.pointAt(eased * length)).transform(m)
    rect.move(p.x, p.y)
}).loop(true, true)