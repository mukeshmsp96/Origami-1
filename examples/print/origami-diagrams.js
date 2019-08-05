/* Origami Diagrams v0.1 (c) Robby Kraft, MIT License */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OrigamiDiagrams = factory());
}(this, (function () { 'use strict';

  var defaultPageStyle = "html, body {\n  width: 100%;\n  margin: 0;\n}\nbody {\n  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n}\n.page-grid {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  grid-template-rows: 250px 250px 255px 255px;\n  grid-auto-rows: 264px;\n}\ndiv.header {\n  height: 400px;\n  padding: 1rem;\n  padding-left: 3rem;\n  padding-top: 2rem;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  /* -webkit-print-color-adjust: exact; */\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\nh1 {\n  font-size: 3.5rem;\n  /*margin-bottom: 2rem;*/\n  text-align: left;\n}\np {\n  font-size: 1rem;\n  width: 100%;\n  /*margin: 1rem 0;*/\n}\nh1, p {\n  margin: 0;\n}\nh1 {\n  width: 100%;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: black;\n}\n.small {\n  font-size: 70%;\n  /*margin-top: 2rem;*/\n}\ndiv.step {\n  position: relative;\n  text-align: center;\n}\ndiv.step .number {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 400;\n}\ndiv.step svg {\n  margin: auto;\n}\n\n.title {\n  grid-column-start: 1;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n.author {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  justify-self: start;\n  align-self: start;\n  text-align: left;\n}\n.description {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  justify-self: start;\n  align-self: start;\n  text-align: left;\n  margin-top: 1.5rem;\n  z-index: 3;\n}\n.fold-time {\n  grid-column-start: 3;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  align-self: center;\n  justify-self: end;\n  text-align: right;\n}\n.size-ratio {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  align-self: end;\n}\n.attribution {\n  grid-column-start: 1;\n  grid-column-end: 5;\n  grid-row-start: 4;\n  grid-row-end: 5;\n  align-self: end;\n  text-align: right;\n  position: relative;\n  bottom: -1rem;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: black;\n  line-height: 3rem;\n}\n\nsvg.step {\n  height: 210px;\n  width: 210px;\n}\nsvg.header.creasePattern {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 3;\n  grid-row-end: 5;\n  justify-self: end;\n  align-self: end;\n  width: 200px;\n  height: 200px;\n}\nsvg.header.foldedForm {\n  grid-column-start: 3;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 5;\n  justify-self: end;\n  width: 300px;\n  height: 300px;\n  z-index: 3;\n  margin-top: 2rem;\n}\nsvg.header.foldedForm.scaled {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 5;\n  width: 200px;\n  height: 200px;\n  z-index: 2;\n  justify-self: start;\n  align-self: end;\n  margin-top: initial;\n  margin-left: -3rem;\n}\n\ndiv.step:nth-of-type(2) {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  /*align-self: end;*/\n}\n\ndiv.step:nth-of-type(3) {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  /*align-self: end;*/\n}\n\n/*\n * --------------------\n * crease pattern style\n * --------------------\n */\n\nsvg { --crease-width: 0.005; }\nsvg * {\n  stroke-width: var(--crease-width);\n  stroke-linecap: round;\n  stroke: black;\n}\npolygon { fill: none; stroke: none; stroke-linejoin: bevel; }\n.boundary { fill: white; stroke: black; }\n.mark { stroke: #AAA; }\n.mountain { stroke: #000; }\n.valley {\n  stroke: #000;\n  stroke-dasharray: calc(var(--crease-width)*2) calc(var(--crease-width)*4);\n}\n.foldedForm .boundary {fill: none; stroke: none;}\n.foldedForm .faces polygon { stroke: #000; }\n.foldedForm .faces .front { fill: white; }\n.foldedForm .faces .back { fill: #dcd8d4; }\n.foldedForm .creases line { stroke: none; }\n.foldedForm .creases { display: none; opacity: 0; }\n.creasePattern .faces { display: none; opacity: 0; }\n.creasePattern .boundary { fill: white; }\n.creasePattern .valley { stroke-dasharray: initial; }\n\nsvg.header.foldedForm.scaled .faces .front { fill: black;}\nsvg.header.foldedForm.scaled .faces .back { fill: black;}\n";

  var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0};
  var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
  function parse(path) {
    var data = [];
  	path.replace(segment, function(_, command, args){
  		var type = command.toLowerCase();
  		args = parseValues(args);
  		if (type === 'm' && args.length > 2) {
  			data.push([command].concat(args.splice(0, 2)));
  			type = 'l';
  			command = command === 'm' ? 'l' : 'L';
  		}
  		while (args.length >= 0) {
  			if (args.length === length[type]) {
  				args.unshift(command);
  				return data.push(args);
  			}
  			if (args.length < length[type]) {
          throw new Error('malformed path data');
        }
  			data.push([command].concat(args.splice(0, length[type])));
  		}
  	});
    return data;
  }
  var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
  function parseValues(args) {
  	var numbers = args.match(number);
  	return numbers ? numbers.map(Number) : [];
  }
  function Bezier(ax, ay, bx, by, cx, cy, dx, dy) {
    return new Bezier$1(ax, ay, bx, by, cx, cy, dx, dy);
  }
  function Bezier$1(ax, ay, bx, by, cx, cy, dx, dy) {
    this.a = {x:ax, y:ay};
    this.b = {x:bx, y:by};
    this.c = {x:cx, y:cy};
    this.d = {x:dx, y:dy};
    if(dx !== null && dx !== undefined && dy !== null && dy !== undefined){
      this.getArcLength = getCubicArcLength;
      this.getPoint = cubicPoint;
      this.getDerivative = cubicDerivative;
    } else {
      this.getArcLength = getQuadraticArcLength;
      this.getPoint = quadraticPoint;
      this.getDerivative = quadraticDerivative;
    }
    this.init();
  }
  Bezier$1.prototype = {
    constructor: Bezier$1,
    init: function() {
      this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x],
                                      [this.a.y, this.b.y, this.c.y, this.d.y]);
    },
    getTotalLength: function() {
      return this.length;
    },
    getPointAtLength: function(length) {
      var t = t2length(length, this.length, this.getArcLength,
                      [this.a.x, this.b.x, this.c.x, this.d.x],
                      [this.a.y, this.b.y, this.c.y, this.d.y]);
      return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x],
                                      [this.a.y, this.b.y, this.c.y, this.d.y],
                                    t);
    },
    getTangentAtLength: function(length){
      var t = t2length(length, this.length, this.getArcLength,
                      [this.a.x, this.b.x, this.c.x, this.d.x],
                      [this.a.y, this.b.y, this.c.y, this.d.y]);
      var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x],
                      [this.a.y, this.b.y, this.c.y, this.d.y], t);
      var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
      var tangent;
      if (mdl > 0){
        tangent = {x: derivative.x/mdl, y: derivative.y/mdl};
      } else {
        tangent = {x: 0, y: 0};
      }
      return tangent;
    },
    getPropertiesAtLength: function(length){
      var t = t2length(length, this.length, this.getArcLength,
                      [this.a.x, this.b.x, this.c.x, this.d.x],
                      [this.a.y, this.b.y, this.c.y, this.d.y]);
      var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x],
                      [this.a.y, this.b.y, this.c.y, this.d.y], t);
      var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
      var tangent;
      if (mdl > 0){
        tangent = {x: derivative.x/mdl, y: derivative.y/mdl};
      } else {
        tangent = {x: 0, y: 0};
      }
      var point = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x],
                                      [this.a.y, this.b.y, this.c.y, this.d.y],
                                    t);
      return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
    }
  };
  function quadraticDerivative(xs, ys, t){
    return {x: (1 - t) * 2*(xs[1] - xs[0]) +t * 2*(xs[2] - xs[1]),
      y: (1 - t) * 2*(ys[1] - ys[0]) +t * 2*(ys[2] - ys[1])
    };
  }
  function cubicDerivative(xs, ys, t){
    var derivative = quadraticPoint(
              [3*(xs[1] - xs[0]), 3*(xs[2] - xs[1]), 3*(xs[3] - xs[2])],
              [3*(ys[1] - ys[0]), 3*(ys[2] - ys[1]), 3*(ys[3] - ys[2])],
              t);
    return derivative;
  }
  function t2length(length, total_length, func, xs, ys){
    var error = 1;
    var t = length/total_length;
    var step = (length - func(xs, ys, t))/total_length;
    var numIterations = 0;
    while (error > 0.001){
      var increasedTLength = func(xs, ys, t + step);
      var decreasedTLength = func(xs, ys, t - step);
      var increasedTError = Math.abs(length - increasedTLength) / total_length;
      var decreasedTError = Math.abs(length - decreasedTLength) / total_length;
      if (increasedTError < error) {
        error = increasedTError;
        t += step;
      } else if (decreasedTError < error) {
        error = decreasedTError;
        t -= step;
      } else {
        step /= 2;
      }
      numIterations++;
      if(numIterations > 500){
        break;
      }
    }
    return t;
  }
  function quadraticPoint(xs, ys, t){
    var x = (1 - t) * (1 - t) * xs[0] + 2 * (1 - t) * t * xs[1] + t * t * xs[2];
    var y = (1 - t) * (1 - t) * ys[0] + 2 * (1 - t) * t * ys[1] + t * t * ys[2];
    return {x: x, y: y};
  }
  function cubicPoint(xs, ys, t){
    var x = (1 - t) * (1 - t) * (1 - t) * xs[0] + 3 * (1 - t) * (1 - t) * t * xs[1] +
    3 * (1 - t) * t * t * xs[2] + t * t * t * xs[3];
    var y = (1 - t) * (1 - t) * (1 - t) * ys[0] + 3 * (1 - t) * (1 - t) * t * ys[1] +
    3 * (1 - t) * t * t * ys[2] + t * t * t * ys[3];
    return {x: x, y: y};
  }
  function getQuadraticArcLength(xs, ys, t) {
    if (t === undefined) {
      t = 1;
    }
     var ax = xs[0] - 2 * xs[1] + xs[2];
     var ay = ys[0] - 2 * ys[1] + ys[2];
     var bx = 2 * xs[1] - 2 * xs[0];
     var by = 2 * ys[1] - 2 * ys[0];
     var A = 4 * (ax * ax + ay * ay);
     var B = 4 * (ax * bx + ay * by);
     var C = bx * bx + by * by;
     if(A === 0){
       return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
     }
     var b = B/(2*A);
     var c = C/A;
     var u = t + b;
     var k = c - b*b;
     var uuk = (u*u+k)>0?Math.sqrt(u*u+k):0;
     var bbk = (b*b+k)>0?Math.sqrt(b*b+k):0;
     var term = ((b+Math.sqrt(b*b+k)))!==0?k*Math.log(Math.abs((u+uuk)/(b+bbk))):0;
     return (Math.sqrt(A)/2)*(
       u*uuk-b*bbk+
       term
     );
  }
  var tValues = [
    [],
    [],
    [-0.5773502691896257,0.5773502691896257],
    [0,-0.7745966692414834,0.7745966692414834],
    [-0.33998104358485626,0.33998104358485626,-0.8611363115940526,0.8611363115940526],
    [0,-0.5384693101056831,0.5384693101056831,-0.906179845938664,0.906179845938664],
    [0.6612093864662645,-0.6612093864662645,-0.2386191860831969,0.2386191860831969,-0.932469514203152,0.932469514203152],
    [0,0.4058451513773972,-0.4058451513773972,-0.7415311855993945,0.7415311855993945,-0.9491079123427585,0.9491079123427585],
    [-0.1834346424956498,0.1834346424956498,-0.525532409916329,0.525532409916329,-0.7966664774136267,0.7966664774136267,-0.9602898564975363,0.9602898564975363],
    [0,-0.8360311073266358,0.8360311073266358,-0.9681602395076261,0.9681602395076261,-0.3242534234038089,0.3242534234038089,-0.6133714327005904,0.6133714327005904],
    [-0.14887433898163122,0.14887433898163122,-0.4333953941292472,0.4333953941292472,-0.6794095682990244,0.6794095682990244,-0.8650633666889845,0.8650633666889845,-0.9739065285171717,0.9739065285171717],
    [0,-0.26954315595234496,0.26954315595234496,-0.5190961292068118,0.5190961292068118,-0.7301520055740494,0.7301520055740494,-0.8870625997680953,0.8870625997680953,-0.978228658146057,0.978228658146057],
    [-0.1252334085114689,0.1252334085114689,-0.3678314989981802,0.3678314989981802,-0.5873179542866175,0.5873179542866175,-0.7699026741943047,0.7699026741943047,-0.9041172563704749,0.9041172563704749,-0.9815606342467192,0.9815606342467192],
    [0,-0.2304583159551348,0.2304583159551348,-0.44849275103644687,0.44849275103644687,-0.6423493394403402,0.6423493394403402,-0.8015780907333099,0.8015780907333099,-0.9175983992229779,0.9175983992229779,-0.9841830547185881,0.9841830547185881],
    [-0.10805494870734367,0.10805494870734367,-0.31911236892788974,0.31911236892788974,-0.5152486363581541,0.5152486363581541,-0.6872929048116855,0.6872929048116855,-0.827201315069765,0.827201315069765,-0.9284348836635735,0.9284348836635735,-0.9862838086968123,0.9862838086968123],
    [0,-0.20119409399743451,0.20119409399743451,-0.3941513470775634,0.3941513470775634,-0.5709721726085388,0.5709721726085388,-0.7244177313601701,0.7244177313601701,-0.8482065834104272,0.8482065834104272,-0.937273392400706,0.937273392400706,-0.9879925180204854,0.9879925180204854],
    [-0.09501250983763744,0.09501250983763744,-0.2816035507792589,0.2816035507792589,-0.45801677765722737,0.45801677765722737,-0.6178762444026438,0.6178762444026438,-0.755404408355003,0.755404408355003,-0.8656312023878318,0.8656312023878318,-0.9445750230732326,0.9445750230732326,-0.9894009349916499,0.9894009349916499],
    [0,-0.17848418149584785,0.17848418149584785,-0.3512317634538763,0.3512317634538763,-0.5126905370864769,0.5126905370864769,-0.6576711592166907,0.6576711592166907,-0.7815140038968014,0.7815140038968014,-0.8802391537269859,0.8802391537269859,-0.9506755217687678,0.9506755217687678,-0.9905754753144174,0.9905754753144174],
    [-0.0847750130417353,0.0847750130417353,-0.2518862256915055,0.2518862256915055,-0.41175116146284263,0.41175116146284263,-0.5597708310739475,0.5597708310739475,-0.6916870430603532,0.6916870430603532,-0.8037049589725231,0.8037049589725231,-0.8926024664975557,0.8926024664975557,-0.9558239495713977,0.9558239495713977,-0.9915651684209309,0.9915651684209309],
    [0,-0.16035864564022537,0.16035864564022537,-0.31656409996362983,0.31656409996362983,-0.46457074137596094,0.46457074137596094,-0.600545304661681,0.600545304661681,-0.7209661773352294,0.7209661773352294,-0.8227146565371428,0.8227146565371428,-0.9031559036148179,0.9031559036148179,-0.96020815213483,0.96020815213483,-0.9924068438435844,0.9924068438435844],
    [-0.07652652113349734,0.07652652113349734,-0.22778585114164507,0.22778585114164507,-0.37370608871541955,0.37370608871541955,-0.5108670019508271,0.5108670019508271,-0.636053680726515,0.636053680726515,-0.7463319064601508,0.7463319064601508,-0.8391169718222188,0.8391169718222188,-0.912234428251326,0.912234428251326,-0.9639719272779138,0.9639719272779138,-0.9931285991850949,0.9931285991850949],
    [0,-0.1455618541608951,0.1455618541608951,-0.2880213168024011,0.2880213168024011,-0.4243421202074388,0.4243421202074388,-0.5516188358872198,0.5516188358872198,-0.6671388041974123,0.6671388041974123,-0.7684399634756779,0.7684399634756779,-0.8533633645833173,0.8533633645833173,-0.9200993341504008,0.9200993341504008,-0.9672268385663063,0.9672268385663063,-0.9937521706203895,0.9937521706203895],
    [-0.06973927331972223,0.06973927331972223,-0.20786042668822127,0.20786042668822127,-0.34193582089208424,0.34193582089208424,-0.469355837986757,0.469355837986757,-0.5876404035069116,0.5876404035069116,-0.6944872631866827,0.6944872631866827,-0.7878168059792081,0.7878168059792081,-0.8658125777203002,0.8658125777203002,-0.926956772187174,0.926956772187174,-0.9700604978354287,0.9700604978354287,-0.9942945854823992,0.9942945854823992],
    [0,-0.1332568242984661,0.1332568242984661,-0.26413568097034495,0.26413568097034495,-0.3903010380302908,0.3903010380302908,-0.5095014778460075,0.5095014778460075,-0.6196098757636461,0.6196098757636461,-0.7186613631319502,0.7186613631319502,-0.8048884016188399,0.8048884016188399,-0.8767523582704416,0.8767523582704416,-0.9329710868260161,0.9329710868260161,-0.9725424712181152,0.9725424712181152,-0.9947693349975522,0.9947693349975522],
    [-0.06405689286260563,0.06405689286260563,-0.1911188674736163,0.1911188674736163,-0.3150426796961634,0.3150426796961634,-0.4337935076260451,0.4337935076260451,-0.5454214713888396,0.5454214713888396,-0.6480936519369755,0.6480936519369755,-0.7401241915785544,0.7401241915785544,-0.820001985973903,0.820001985973903,-0.8864155270044011,0.8864155270044011,-0.9382745520027328,0.9382745520027328,-0.9747285559713095,0.9747285559713095,-0.9951872199970213,0.9951872199970213]
  ];
  var cValues = [
    [],
    [],
    [1,1],
    [0.8888888888888888,0.5555555555555556,0.5555555555555556],
    [0.6521451548625461,0.6521451548625461,0.34785484513745385,0.34785484513745385],
    [0.5688888888888889,0.47862867049936647,0.47862867049936647,0.23692688505618908,0.23692688505618908],
    [0.3607615730481386,0.3607615730481386,0.46791393457269104,0.46791393457269104,0.17132449237917036,0.17132449237917036],
    [0.4179591836734694,0.3818300505051189,0.3818300505051189,0.27970539148927664,0.27970539148927664,0.1294849661688697,0.1294849661688697],
    [0.362683783378362,0.362683783378362,0.31370664587788727,0.31370664587788727,0.22238103445337448,0.22238103445337448,0.10122853629037626,0.10122853629037626],
    [0.3302393550012598,0.1806481606948574,0.1806481606948574,0.08127438836157441,0.08127438836157441,0.31234707704000286,0.31234707704000286,0.26061069640293544,0.26061069640293544],
    [0.29552422471475287,0.29552422471475287,0.26926671930999635,0.26926671930999635,0.21908636251598204,0.21908636251598204,0.1494513491505806,0.1494513491505806,0.06667134430868814,0.06667134430868814],
    [0.2729250867779006,0.26280454451024665,0.26280454451024665,0.23319376459199048,0.23319376459199048,0.18629021092773426,0.18629021092773426,0.1255803694649046,0.1255803694649046,0.05566856711617366,0.05566856711617366],
    [0.24914704581340277,0.24914704581340277,0.2334925365383548,0.2334925365383548,0.20316742672306592,0.20316742672306592,0.16007832854334622,0.16007832854334622,0.10693932599531843,0.10693932599531843,0.04717533638651183,0.04717533638651183],
    [0.2325515532308739,0.22628318026289723,0.22628318026289723,0.2078160475368885,0.2078160475368885,0.17814598076194574,0.17814598076194574,0.13887351021978725,0.13887351021978725,0.09212149983772845,0.09212149983772845,0.04048400476531588,0.04048400476531588],
    [0.2152638534631578,0.2152638534631578,0.2051984637212956,0.2051984637212956,0.18553839747793782,0.18553839747793782,0.15720316715819355,0.15720316715819355,0.12151857068790319,0.12151857068790319,0.08015808715976021,0.08015808715976021,0.03511946033175186,0.03511946033175186],
    [0.2025782419255613,0.19843148532711158,0.19843148532711158,0.1861610000155622,0.1861610000155622,0.16626920581699392,0.16626920581699392,0.13957067792615432,0.13957067792615432,0.10715922046717194,0.10715922046717194,0.07036604748810812,0.07036604748810812,0.03075324199611727,0.03075324199611727],
    [0.1894506104550685,0.1894506104550685,0.18260341504492358,0.18260341504492358,0.16915651939500254,0.16915651939500254,0.14959598881657674,0.14959598881657674,0.12462897125553388,0.12462897125553388,0.09515851168249279,0.09515851168249279,0.062253523938647894,0.062253523938647894,0.027152459411754096,0.027152459411754096],
    [0.17944647035620653,0.17656270536699264,0.17656270536699264,0.16800410215645004,0.16800410215645004,0.15404576107681028,0.15404576107681028,0.13513636846852548,0.13513636846852548,0.11188384719340397,0.11188384719340397,0.08503614831717918,0.08503614831717918,0.0554595293739872,0.0554595293739872,0.02414830286854793,0.02414830286854793],
    [0.1691423829631436,0.1691423829631436,0.16427648374583273,0.16427648374583273,0.15468467512626524,0.15468467512626524,0.14064291467065065,0.14064291467065065,0.12255520671147846,0.12255520671147846,0.10094204410628717,0.10094204410628717,0.07642573025488905,0.07642573025488905,0.0497145488949698,0.0497145488949698,0.02161601352648331,0.02161601352648331],
    [0.1610544498487837,0.15896884339395434,0.15896884339395434,0.15276604206585967,0.15276604206585967,0.1426067021736066,0.1426067021736066,0.12875396253933621,0.12875396253933621,0.11156664554733399,0.11156664554733399,0.09149002162245,0.09149002162245,0.06904454273764123,0.06904454273764123,0.0448142267656996,0.0448142267656996,0.019461788229726478,0.019461788229726478],
    [0.15275338713072584,0.15275338713072584,0.14917298647260374,0.14917298647260374,0.14209610931838204,0.14209610931838204,0.13168863844917664,0.13168863844917664,0.11819453196151841,0.11819453196151841,0.10193011981724044,0.10193011981724044,0.08327674157670475,0.08327674157670475,0.06267204833410907,0.06267204833410907,0.04060142980038694,0.04060142980038694,0.017614007139152118,0.017614007139152118],
    [0.14608113364969041,0.14452440398997005,0.14452440398997005,0.13988739479107315,0.13988739479107315,0.13226893863333747,0.13226893863333747,0.12183141605372853,0.12183141605372853,0.10879729916714838,0.10879729916714838,0.09344442345603386,0.09344442345603386,0.0761001136283793,0.0761001136283793,0.057134425426857205,0.057134425426857205,0.036953789770852494,0.036953789770852494,0.016017228257774335,0.016017228257774335],
    [0.13925187285563198,0.13925187285563198,0.13654149834601517,0.13654149834601517,0.13117350478706238,0.13117350478706238,0.12325237681051242,0.12325237681051242,0.11293229608053922,0.11293229608053922,0.10041414444288096,0.10041414444288096,0.08594160621706773,0.08594160621706773,0.06979646842452049,0.06979646842452049,0.052293335152683286,0.052293335152683286,0.03377490158481415,0.03377490158481415,0.0146279952982722,0.0146279952982722],
    [0.13365457218610619,0.1324620394046966,0.1324620394046966,0.12890572218808216,0.12890572218808216,0.12304908430672953,0.12304908430672953,0.11499664022241136,0.11499664022241136,0.10489209146454141,0.10489209146454141,0.09291576606003515,0.09291576606003515,0.07928141177671895,0.07928141177671895,0.06423242140852585,0.06423242140852585,0.04803767173108467,0.04803767173108467,0.030988005856979445,0.030988005856979445,0.013411859487141771,0.013411859487141771],
    [0.12793819534675216,0.12793819534675216,0.1258374563468283,0.1258374563468283,0.12167047292780339,0.12167047292780339,0.1155056680537256,0.1155056680537256,0.10744427011596563,0.10744427011596563,0.09761865210411388,0.09761865210411388,0.08619016153195327,0.08619016153195327,0.0733464814110803,0.0733464814110803,0.05929858491543678,0.05929858491543678,0.04427743881741981,0.04427743881741981,0.028531388628933663,0.028531388628933663,0.0123412297999872,0.0123412297999872]
  ];
  var binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  function binomials(n, k) {
    return binomialCoefficients[n][k];
  }
  function getDerivative(derivative, t, vs) {
    var n = vs.length - 1,
        _vs,
        value,
        k;
    if (n === 0) {
      return 0;
    }
    if (derivative === 0) {
      value = 0;
      for (k = 0; k <= n; k++) {
        value += binomials(n, k) * Math.pow(1 - t, n - k) * Math.pow(t, k) * vs[k];
      }
      return value;
    } else {
      _vs = new Array(n);
      for (k = 0; k < n; k++) {
        _vs[k] = n * (vs[k + 1] - vs[k]);
      }
      return getDerivative(derivative - 1, t, _vs);
    }
  }
  function B(xs, ys, t) {
    var xbase = getDerivative(1, t, xs);
    var ybase = getDerivative(1, t, ys);
    var combined = xbase * xbase + ybase * ybase;
    return Math.sqrt(combined);
  }
  function getCubicArcLength(xs, ys, t) {
    var z, sum, i, correctedT;
    if (t === undefined) {
      t = 1;
    }
    var n = 20;
    z = t / 2;
    sum = 0;
    for (i = 0; i < n; i++) {
      correctedT = z * tValues[n][i] + z;
      sum += cValues[n][i] * B(xs, ys, correctedT);
    }
    return z * sum;
  }
  function Arc(x0, y0, rx,ry, xAxisRotate, LargeArcFlag,SweepFlag, x,y) {
    return new Arc$1(x0, y0, rx,ry, xAxisRotate, LargeArcFlag,SweepFlag, x,y);
  }
  function Arc$1(x0, y0,rx,ry, xAxisRotate, LargeArcFlag, SweepFlag,x1,y1) {
    this.x0 = x0;
    this.y0 = y0;
    this.rx = rx;
    this.ry = ry;
    this.xAxisRotate = xAxisRotate;
    this.LargeArcFlag = LargeArcFlag;
    this.SweepFlag = SweepFlag;
    this.x1 = x1;
    this.y1 = y1;
    var lengthProperties = approximateArcLengthOfCurve(300, function(t) {
      return pointOnEllipticalArc({x: x0, y:y0}, rx, ry, xAxisRotate,
                                   LargeArcFlag, SweepFlag, {x: x1, y:y1}, t);
    });
    this.length = lengthProperties.arcLength;
  }
  Arc$1.prototype = {
    constructor: Arc$1,
    init: function() {
    },
    getTotalLength: function() {
      return this.length;
    },
    getPointAtLength: function(fractionLength) {
      if(fractionLength < 0){
        fractionLength = 0;
      } else if(fractionLength > this.length){
        fractionLength = this.length;
      }
      var position = pointOnEllipticalArc({x: this.x0, y:this.y0},
        this.rx, this.ry, this.xAxisRotate,
        this.LargeArcFlag, this.SweepFlag,
        {x: this.x1, y: this.y1},
        fractionLength/this.length);
      return {x: position.x, y: position.y};
    },
    getTangentAtLength: function(fractionLength) {
      if(fractionLength < 0){
          fractionLength = 0;
          } else if(fractionLength > this.length){
          fractionLength = this.length;
          }
          var position = pointOnEllipticalArc({x: this.x0, y:this.y0},
            this.rx, this.ry, this.xAxisRotate,
            this.LargeArcFlag, this.SweepFlag,
            {x: this.x1, y: this.y1},
            fractionLength/this.length);
          return {x: position.x, y: position.y};
    },
    getPropertiesAtLength: function(fractionLength){
      var tangent = this.getTangentAtLength(fractionLength);
      var point = this.getPointAtLength(fractionLength);
      return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
    }
  };
  function pointOnEllipticalArc(p0, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, p1, t) {
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    xAxisRotation = mod(xAxisRotation, 360);
    var xAxisRotationRadians = toRadians(xAxisRotation);
    if(p0.x === p1.x && p0.y === p1.y) {
      return p0;
    }
    if(rx === 0 || ry === 0) {
      return this.pointOnLine(p0, p1, t);
    }
    var dx = (p0.x-p1.x)/2;
    var dy = (p0.y-p1.y)/2;
    var transformedPoint = {
      x: Math.cos(xAxisRotationRadians)*dx + Math.sin(xAxisRotationRadians)*dy,
      y: -Math.sin(xAxisRotationRadians)*dx + Math.cos(xAxisRotationRadians)*dy
    };
    var radiiCheck = Math.pow(transformedPoint.x, 2)/Math.pow(rx, 2) + Math.pow(transformedPoint.y, 2)/Math.pow(ry, 2);
    if(radiiCheck > 1) {
      rx = Math.sqrt(radiiCheck)*rx;
      ry = Math.sqrt(radiiCheck)*ry;
    }
    var cSquareNumerator = Math.pow(rx, 2)*Math.pow(ry, 2) - Math.pow(rx, 2)*Math.pow(transformedPoint.y, 2) - Math.pow(ry, 2)*Math.pow(transformedPoint.x, 2);
    var cSquareRootDenom = Math.pow(rx, 2)*Math.pow(transformedPoint.y, 2) + Math.pow(ry, 2)*Math.pow(transformedPoint.x, 2);
    var cRadicand = cSquareNumerator/cSquareRootDenom;
    cRadicand = cRadicand < 0 ? 0 : cRadicand;
    var cCoef = (largeArcFlag !== sweepFlag ? 1 : -1) * Math.sqrt(cRadicand);
    var transformedCenter = {
      x: cCoef*((rx*transformedPoint.y)/ry),
      y: cCoef*(-(ry*transformedPoint.x)/rx)
    };
    var center = {
      x: Math.cos(xAxisRotationRadians)*transformedCenter.x - Math.sin(xAxisRotationRadians)*transformedCenter.y + ((p0.x+p1.x)/2),
      y: Math.sin(xAxisRotationRadians)*transformedCenter.x + Math.cos(xAxisRotationRadians)*transformedCenter.y + ((p0.y+p1.y)/2)
    };
    var startVector = {
      x: (transformedPoint.x-transformedCenter.x)/rx,
      y: (transformedPoint.y-transformedCenter.y)/ry
    };
    var startAngle = angleBetween({
      x: 1,
      y: 0
    }, startVector);
    var endVector = {
      x: (-transformedPoint.x-transformedCenter.x)/rx,
      y: (-transformedPoint.y-transformedCenter.y)/ry
    };
    var sweepAngle = angleBetween(startVector, endVector);
    if(!sweepFlag && sweepAngle > 0) {
      sweepAngle -= 2*Math.PI;
    }
    else if(sweepFlag && sweepAngle < 0) {
      sweepAngle += 2*Math.PI;
    }
    sweepAngle %= 2*Math.PI;
    var angle = startAngle+(sweepAngle*t);
    var ellipseComponentX = rx*Math.cos(angle);
    var ellipseComponentY = ry*Math.sin(angle);
    var point = {
      x: Math.cos(xAxisRotationRadians)*ellipseComponentX - Math.sin(xAxisRotationRadians)*ellipseComponentY + center.x,
      y: Math.sin(xAxisRotationRadians)*ellipseComponentX + Math.cos(xAxisRotationRadians)*ellipseComponentY + center.y
    };
    point.ellipticalArcStartAngle = startAngle;
    point.ellipticalArcEndAngle = startAngle+sweepAngle;
    point.ellipticalArcAngle = angle;
    point.ellipticalArcCenter = center;
    point.resultantRx = rx;
    point.resultantRy = ry;
    return point;
  }
  function approximateArcLengthOfCurve(resolution, pointOnCurveFunc) {
    resolution = resolution ? resolution : 500;
    var resultantArcLength = 0;
    var arcLengthMap = [];
    var approximationLines = [];
    var prevPoint = pointOnCurveFunc(0);
    var nextPoint;
    for(var i = 0; i < resolution; i++) {
      var t = clamp(i*(1/resolution), 0, 1);
      nextPoint = pointOnCurveFunc(t);
      resultantArcLength += distance(prevPoint, nextPoint);
      approximationLines.push([prevPoint, nextPoint]);
      arcLengthMap.push({
        t: t,
        arcLength: resultantArcLength
      });
      prevPoint = nextPoint;
    }
    nextPoint = pointOnCurveFunc(1);
    approximationLines.push([prevPoint, nextPoint]);
    resultantArcLength += distance(prevPoint, nextPoint);
    arcLengthMap.push({
      t: 1,
      arcLength: resultantArcLength
    });
    return {
      arcLength: resultantArcLength,
      arcLengthMap: arcLengthMap,
      approximationLines: approximationLines
    };
  }
  function mod(x, m) {
    return (x%m + m)%m;
  }
  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }
  function distance(p0, p1) {
    return Math.sqrt(Math.pow(p1.x-p0.x, 2) + Math.pow(p1.y-p0.y, 2));
  }
  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function angleBetween(v0, v1) {
    var p = v0.x*v1.x + v0.y*v1.y;
    var n = Math.sqrt((Math.pow(v0.x, 2)+Math.pow(v0.y, 2)) * (Math.pow(v1.x, 2)+Math.pow(v1.y, 2)));
    var sign = v0.x*v1.y - v0.y*v1.x < 0 ? -1 : 1;
    var angle = sign*Math.acos(p/n);
    return angle;
  }
  function LinearPosition(x0, x1, y0, y1) {
    return new LinearPosition$1(x0, x1, y0, y1);
  }
  function LinearPosition$1(x0, x1, y0, y1){
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
  }
  LinearPosition$1.prototype.getTotalLength = function(){
    return Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
           Math.pow(this.y0 - this.y1, 2));
  };
  LinearPosition$1.prototype.getPointAtLength = function(pos){
    var fraction = pos/ (Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
           Math.pow(this.y0 - this.y1, 2)));
    var newDeltaX = (this.x1 - this.x0)*fraction;
    var newDeltaY = (this.y1 - this.y0)*fraction;
    return { x: this.x0 + newDeltaX, y: this.y0 + newDeltaY };
  };
  LinearPosition$1.prototype.getTangentAtLength = function(){
    var module = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) +
                (this.y1 - this.y0) * (this.y1 - this.y0));
    return { x: (this.x1 - this.x0)/module, y: (this.y1 - this.y0)/module };
  };
  LinearPosition$1.prototype.getPropertiesAtLength = function(pos){
    var point = this.getPointAtLength(pos);
    var tangent = this.getTangentAtLength();
    return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
  };
  function PathProperties(svgString) {
    var length = 0;
    var partial_lengths = [];
    var functions = [];
    function svgProperties(string){
      if(!string){return null;}
      var parsed = parse(string);
      var cur = [0, 0];
      var prev_point = [0, 0];
      var curve;
      var ringStart;
      for (var i = 0; i < parsed.length; i++){
        if(parsed[i][0] === "M"){
          cur = [parsed[i][1], parsed[i][2]];
          ringStart = [cur[0], cur[1]];
          functions.push(null);
        } else if(parsed[i][0] === "m"){
          cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
          ringStart = [cur[0], cur[1]];
          functions.push(null);
        }
        else if(parsed[i][0] === "L"){
          length = length + Math.sqrt(Math.pow(cur[0] - parsed[i][1], 2) + Math.pow(cur[1] - parsed[i][2], 2));
          functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]));
          cur = [parsed[i][1], parsed[i][2]];
        } else if(parsed[i][0] === "l"){
          length = length + Math.sqrt(Math.pow(parsed[i][1], 2) + Math.pow(parsed[i][2], 2));
          functions.push(new LinearPosition(cur[0], parsed[i][1] + cur[0], cur[1], parsed[i][2] + cur[1]));
          cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
        } else if(parsed[i][0] === "H"){
          length = length + Math.abs(cur[0] - parsed[i][1]);
          functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], cur[1]));
          cur[0] = parsed[i][1];
        } else if(parsed[i][0] === "h"){
          length = length + Math.abs(parsed[i][1]);
          functions.push(new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1]));
          cur[0] = parsed[i][1] + cur[0];
        } else if(parsed[i][0] === "V"){
          length = length + Math.abs(cur[1] - parsed[i][1]);
          functions.push(new LinearPosition(cur[0], cur[0], cur[1], parsed[i][1]));
          cur[1] = parsed[i][1];
        } else if(parsed[i][0] === "v"){
          length = length + Math.abs(parsed[i][1]);
          functions.push(new LinearPosition(cur[0], cur[0], cur[1], cur[1] + parsed[i][1]));
          cur[1] = parsed[i][1] + cur[1];
        }  else if(parsed[i][0] === "z" || parsed[i][0] === "Z"){
          length = length + Math.sqrt(Math.pow(ringStart[0] - cur[0], 2) + Math.pow(ringStart[1] - cur[1], 2));
          functions.push(new LinearPosition(cur[0], ringStart[0], cur[1], ringStart[1]));
          cur = [ringStart[0], ringStart[1]];
        }
        else if(parsed[i][0] === "C"){
          curve = new Bezier(cur[0], cur[1] , parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4] , parsed[i][5], parsed[i][6]);
          length = length + curve.getTotalLength();
          cur = [parsed[i][5], parsed[i][6]];
          functions.push(curve);
        } else if(parsed[i][0] === "c"){
          curve = new Bezier(cur[0], cur[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4] , cur[0] + parsed[i][5], cur[1] + parsed[i][6]);
          if(curve.getTotalLength() > 0){
            length = length + curve.getTotalLength();
            functions.push(curve);
            cur = [parsed[i][5] + cur[0], parsed[i][6] + cur[1]];
          } else {
            functions.push(new LinearPosition(cur[0], cur[0], cur[1], cur[1]));
          }
        } else if(parsed[i][0] === "S"){
          if(i>0 && ["C","c","S","s"].indexOf(parsed[i-1][0]) > -1){
            curve = new Bezier(cur[0], cur[1] , 2*cur[0] - parsed[i-1][parsed[i-1].length - 4], 2*cur[1] - parsed[i-1][parsed[i-1].length - 3], parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
          } else {
            curve = new Bezier(cur[0], cur[1] , cur[0], cur[1], parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
          }
          length = length + curve.getTotalLength();
          cur = [parsed[i][3], parsed[i][4]];
          functions.push(curve);
        }  else if(parsed[i][0] === "s"){
          if(i>0 && ["C","c","S","s"].indexOf(parsed[i-1][0]) > -1){
            curve = new Bezier(cur[0], cur[1] , cur[0] + curve.d.x - curve.c.x, cur[1] + curve.d.y - curve.c.y, cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
          } else {
            curve = new Bezier(cur[0], cur[1] , cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
          }
          length = length + curve.getTotalLength();
          cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
          functions.push(curve);
        }
        else if(parsed[i][0] === "Q"){
          if(cur[0] == parsed[i][1] && cur[1] == parsed[i][2]){
            curve = new LinearPosition(parsed[i][1], parsed[i][3], parsed[i][2], parsed[i][4]);
          } else {
            curve = new Bezier(cur[0], cur[1] , parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
          }
          length = length + curve.getTotalLength();
          functions.push(curve);
          cur = [parsed[i][3], parsed[i][4]];
          prev_point = [parsed[i][1], parsed[i][2]];
        }  else if(parsed[i][0] === "q"){
          if(!(parsed[i][1] == 0 && parsed[i][2] == 0)){
            curve = new Bezier(cur[0], cur[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
          } else {
            curve = new LinearPosition(cur[0] + parsed[i][1], cur[0] + parsed[i][3], cur[1] + parsed[i][2], cur[1] + parsed[i][4]);
          }
          length = length + curve.getTotalLength();
          prev_point = [cur[0] + parsed[i][1], cur[1] + parsed[i][2]];
          cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
          functions.push(curve);
        } else if(parsed[i][0] === "T"){
          if(i>0 && ["Q","q","T","t"].indexOf(parsed[i-1][0]) > -1){
            curve = new Bezier(cur[0], cur[1] , 2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1] , parsed[i][1], parsed[i][2]);
          } else {
            curve = new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]);
          }
          functions.push(curve);
          length = length + curve.getTotalLength();
          prev_point = [2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1]];
          cur = [parsed[i][1], parsed[i][2]];
        } else if(parsed[i][0] === "t"){
          if(i>0 && ["Q","q","T","t"].indexOf(parsed[i-1][0]) > -1){
            curve = new Bezier(cur[0], cur[1] , 2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2]);
          } else {
            curve = new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1] + parsed[i][2]);
          }
          length = length + curve.getTotalLength();
          prev_point = [2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1]];
          cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[0]];
          functions.push(curve);
        } else if(parsed[i][0] === "A"){
          curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6], parsed[i][7]);
          length = length + curve.getTotalLength();
          cur = [parsed[i][6], parsed[i][7]];
          functions.push(curve);
        } else if(parsed[i][0] === "a"){
          curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], cur[0] + parsed[i][6], cur[1] + parsed[i][7]);
          length = length + curve.getTotalLength();
          cur = [cur[0] + parsed[i][6], cur[1] + parsed[i][7]];
          functions.push(curve);
        }
        partial_lengths.push(length);
      }
      return svgProperties;
    }
   svgProperties.getTotalLength = function(){
      return length;
    };
    svgProperties.getPointAtLength = function(fractionLength){
      var fractionPart = getPartAtLength(fractionLength);
      return functions[fractionPart.i].getPointAtLength(fractionPart.fraction);
    };
    svgProperties.getTangentAtLength = function(fractionLength){
      var fractionPart = getPartAtLength(fractionLength);
      return functions[fractionPart.i].getTangentAtLength(fractionPart.fraction);
    };
    svgProperties.getPropertiesAtLength = function(fractionLength){
      var fractionPart = getPartAtLength(fractionLength);
      return functions[fractionPart.i].getPropertiesAtLength(fractionPart.fraction);
    };
    svgProperties.getParts = function(){
      var parts = [];
      for(var i = 0; i< functions.length; i++){
        if(functions[i] != null){
          var properties = {};
          properties['start'] = functions[i].getPointAtLength(0);
          properties['end'] = functions[i].getPointAtLength(partial_lengths[i] - partial_lengths[i-1]);
          properties['length'] = partial_lengths[i] - partial_lengths[i-1];
          (function(func){
            properties['getPointAtLength'] = function(d){return func.getPointAtLength(d);};
            properties['getTangentAtLength'] = function(d){return func.getTangentAtLength(d);};
            properties['getPropertiesAtLength'] = function(d){return func.getPropertiesAtLength(d);};
          })(functions[i]);
          parts.push(properties);
        }
      }
      return parts;
    };
    var getPartAtLength = function(fractionLength){
      if(fractionLength < 0){
        fractionLength = 0;
      } else if(fractionLength > length){
        fractionLength = length;
      }
      var i = partial_lengths.length - 1;
      while(partial_lengths[i] >= fractionLength && partial_lengths[i] > 0){
        i--;
      }
      i++;
      return {fraction: fractionLength-partial_lengths[i-1], i: i};
    };
    return svgProperties(svgString);
  }
  const RES_CIRCLE = 64;
  const RES_PATH = 128;
  const emptyValue = { value: 0 };
  const getAttributes = function(element, attributeList) {
  	let indices = attributeList.map(attr => {
  		for (var i = 0; i < element.attributes.length; i++) {
  			if (element.attributes[i].nodeName === attr) {
  				return i;
  			}
  		}
  	});
  	return indices
  		.map(i => i === undefined ? emptyValue : element.attributes[i])
  		.map(attr => attr.value !== undefined ? attr.value : attr.baseVal.value);
  };
  const svg_line_to_segments = function(line) {
  	return [getAttributes(line, ["x1","y1","x2","y2"])];
  };
  const svg_rect_to_segments = function(rect) {
  	let attrs = getAttributes(rect, ["x","y","width","height"]);
  	let x = parseFloat(attrs[0]);
  	let y = parseFloat(attrs[1]);
  	let width = parseFloat(attrs[2]);
  	let height = parseFloat(attrs[3]);
  	return [
  		[x, y, x+width, y],
  		[x+width, y, x+width, y+height],
  		[x+width, y+height, x, y+height],
  		[x, y+height, x, y]
  	];
  };
  const svg_circle_to_segments = function(circle) {
  	let attrs = getAttributes(circle, ["cx", "cy", "r"]);
  	let cx = parseFloat(attrs[0]);
  	let cy = parseFloat(attrs[1]);
  	let r = parseFloat(attrs[2]);
  	return Array.from(Array(RES_CIRCLE))
  		.map((_,i) => [
  			cx + r*Math.cos(i/RES_CIRCLE*Math.PI*2),
  			cy + r*Math.sin(i/RES_CIRCLE*Math.PI*2)
  		]).map((_,i,arr) => [
  			arr[i][0],
  			arr[i][1],
  			arr[(i+1)%arr.length][0],
  			arr[(i+1)%arr.length][1]
  		]);
  };
  const svg_ellipse_to_segments = function(ellipse) {
  	let attrs = getAttributes(ellipse, ["cx", "cy", "rx", "ry"]);
  	let cx = parseFloat(attrs[0]);
  	let cy = parseFloat(attrs[1]);
  	let rx = parseFloat(attrs[2]);
  	let ry = parseFloat(attrs[3]);
  	return Array.from(Array(RES_CIRCLE))
  		.map((_,i) => [
  			cx + rx*Math.cos(i/RES_CIRCLE*Math.PI*2),
  			cy + ry*Math.sin(i/RES_CIRCLE*Math.PI*2)
  		]).map((_,i,arr) => [
  			arr[i][0],
  			arr[i][1],
  			arr[(i+1)%arr.length][0],
  			arr[(i+1)%arr.length][1]
  		]);
  };
  const pointStringToArray = function(str) {
  	return str.split(" ")
  		.filter(s => s !== "")
  		.map(p => p.split(",")
  			.map(n => parseFloat(n))
  		);
  };
  const svg_polygon_to_segments = function(polygon) {
  	let points = "";
  	for (var i = 0; i < polygon.attributes.length; i++) {
  		if (polygon.attributes[i].nodeName === "points") {
  			points = polygon.attributes[i].value;
  			break;
  		}
  	}
  	return pointStringToArray(points)
  		.map((_,i,a) => [
  			a[i][0],
  			a[i][1],
  			a[(i+1)%a.length][0],
  			a[(i+1)%a.length][1]
  		])
  };
  const svg_polyline_to_segments = function(polyline) {
  	let circularPath = svg_polygon_to_segments(polyline);
  	circularPath.pop();
  	return circularPath;
  };
  const svg_path_to_segments = function(path) {
  	let d = path.getAttribute("d");
  	let prop = PathProperties(d);
  	let length = prop.getTotalLength();
  	let isClosed = (d[d.length-1] === "Z" || d[d.length-1] === "z");
  	let segmentLength = (isClosed
  		? length / RES_PATH
  		: length / (RES_PATH-1));
  	let pathsPoints = Array.from(Array(RES_PATH))
  		.map((_,i) => prop.getPointAtLength(i*segmentLength))
  		.map(p => [p.x, p.y]);
  	let segments = pathsPoints.map((_,i,a) => [
  		a[i][0],
  		a[i][1],
  		a[(i+1)%a.length][0],
  		a[(i+1)%a.length][1]
  	]);
  	if (!isClosed) { segments.pop(); }
  	return segments;
  };
  const parsers = {
  	"line": svg_line_to_segments,
  	"rect": svg_rect_to_segments,
  	"circle": svg_circle_to_segments,
  	"ellipse": svg_ellipse_to_segments,
  	"polygon": svg_polygon_to_segments,
  	"polyline": svg_polyline_to_segments,
  	"path": svg_path_to_segments
  };
  let DOMParser$1 = (typeof window === "undefined" || window === null)
  	? undefined
  	: window.DOMParser;
  if (typeof DOMParser$1 === "undefined" || DOMParser$1 === null) {
  	DOMParser$1 = require("xmldom").DOMParser;
  }
  let XMLSerializer$1 = (typeof window === "undefined" || window === null)
  	? undefined
  	: window.XMLSerializer;
  if (typeof XMLSerializer$1 === "undefined" || XMLSerializer$1 === null) {
  	XMLSerializer$1 = require("xmldom").XMLSerializer;
  }
  let document$1 = (typeof window === "undefined" || window === null)
  	? undefined
  	: window.document;
  if (typeof document$1 === "undefined" || document$1 === null) {
  	document$1 = new DOMParser$1()
  		.parseFromString("<!DOCTYPE html><title>a</title>", "text/html");
  }
  const parseable = Object.keys(parsers);
  const shape_attr = {
  	"line": ["x1", "y1", "x2", "y2"],
  	"rect": ["x", "y", "width", "height"],
  	"circle": ["cx", "cy", "r"],
  	"ellipse": ["cx", "cy", "rx", "ry"],
  	"polygon": ["points"],
  	"polyline": ["points"],
  	"path": ["d"]
  };
  const inputIntoXML = function(input) {
  	return (typeof input === "string"
  		? new DOMParser$1().parseFromString(input, "text/xml").documentElement
  		: input);
  };
  const flatten_tree = function(element) {
  	if (element.tagName === "g" || element.tagName === "svg") {
  		if (element.childNodes == null) { return []; }
  		return Array.from(element.childNodes)
  			.map(child => flatten_tree(child))
  			.reduce((a,b) => a.concat(b),[]);
  	}
  	return [element];
  };
  const attribute_list = function(element) {
  	return Array.from(element.attributes)
  		.filter(a => shape_attr[element.tagName].indexOf(a.name) === -1);
  };
  const withAttributes = function(input) {
  	let inputSVG = inputIntoXML(input);
  	return flatten_tree(inputSVG)
  		.filter(e => parseable.indexOf(e.tagName) !== -1)
  		.map(e => parsers[e.tagName](e).map(s => {
  			let obj = ({x1:s[0], y1:s[1], x2:s[2], y2:s[3]});
  			attribute_list(e).forEach(a => obj[a.nodeName] = a.value);
  			return obj;
  		}))
  		.reduce((a,b) => a.concat(b), []);
  };
  const get_boundary_vertices = function (graph) {
    let edges_vertices_b = graph.edges_vertices.filter((ev,i) =>
      graph.edges_assignment[i] == "B" ||
      graph.edges_assignment[i] == "b"
    ).map(arr => arr.slice());
    if (edges_vertices_b.length === 0) { return []; }
    let keys = Array.from(Array(graph.vertices_coords.length)).map(_ => []);
    edges_vertices_b.forEach((ev,i) => ev.forEach(e => keys[e].push(i)));
    let edgeIndex = 0;
    let startVertex = edges_vertices_b[edgeIndex].shift();
    let nextVertex = edges_vertices_b[edgeIndex].shift();
    let vertices = [startVertex];
    while (vertices[0] !== nextVertex) {
      vertices.push(nextVertex);
      let whichEdges = keys[nextVertex];
      let thisKeyIndex = keys[nextVertex].indexOf(edgeIndex);
      if (thisKeyIndex === -1) { return; }
      keys[nextVertex].splice(thisKeyIndex, 1);
      let nextEdgeAndIndex = keys[nextVertex]
        .map((el,i) => ({key: el, i: i}))
        .filter(el => el.key !== edgeIndex).shift();
      if (nextEdgeAndIndex == null) { return; }
      keys[nextVertex].splice(nextEdgeAndIndex.i, 1);
      edgeIndex = nextEdgeAndIndex.key;
      let lastEdgeIndex = edges_vertices_b[edgeIndex].indexOf(nextVertex);
      if (lastEdgeIndex === -1) { return; }
      edges_vertices_b[edgeIndex].splice(lastEdgeIndex, 1);
      nextVertex = edges_vertices_b[edgeIndex].shift();
    }
    return vertices;
  };
  const bounding_rect = function (graph) {
    if ("vertices_coords" in graph === false ||
      graph.vertices_coords.length <= 0) {
      return [0,0,0,0];
    }
    let dimension = graph.vertices_coords[0].length;
    let smallest = Array.from(Array(dimension)).map(_ => Infinity);
    let largest = Array.from(Array(dimension)).map(_ => -Infinity);
    graph.vertices_coords.forEach(v => v.forEach((n,i) => {
      if (n < smallest[i]) { smallest[i] = n; }
      if (n > largest[i]) { largest[i] = n; }
    }));
    let x = smallest[0];
    let y = smallest[1];
    let w = largest[0] - smallest[0];
    let h = largest[1] - smallest[1];
    return (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(h)
      ? [0,0,0,0]
      : [x,y,w,h]);
  };
  const make_faces_faces = function (graph) {
    let nf = graph.faces_vertices.length;
    let faces_faces = Array.from(Array(nf)).map(() => []);
    let edgeMap = {};
    graph.faces_vertices.forEach((vertices_index, idx1) => {
      if (vertices_index === undefined) { return; }
      let n = vertices_index.length;
      vertices_index.forEach((v1, i, vs) => {
        let v2 = vs[(i + 1) % n];
        if (v2 < v1) [v1, v2] = [v2, v1];
        let key = v1 + " " + v2;
        if (key in edgeMap) {
          let idx2 = edgeMap[key];
          faces_faces[idx1].push(idx2);
          faces_faces[idx2].push(idx1);
        } else {
          edgeMap[key] = idx1;
        }
      });
    });
    return faces_faces;
  };
  const faces_matrix_coloring = function (faces_matrix) {
    return faces_matrix
      .map(m => m[0] * m[3] - m[1] * m[2])
      .map(c => c >= 0);
  };
  const faces_coloring = function (graph, root_face = 0){
    let coloring = [];
    coloring[root_face] = true;
    make_face_walk_tree(graph, root_face).forEach((level, i) =>
      level.forEach((entry) => coloring[entry.face] = (i % 2 === 0))
    );
    return coloring;
  };
  const make_face_walk_tree = function (graph, root_face = 0){
    let new_faces_faces = make_faces_faces(graph);
    if (new_faces_faces.length <= 0) {
      return [];
    }
    var visited = [root_face];
    var list = [[{ face: root_face, parent: undefined, edge: undefined, level: 0 }]];
    do{
      list[list.length] = list[list.length-1].map((current) =>{
        let unique_faces = new_faces_faces[current.face]
          .filter(f => visited.indexOf(f) === -1);
        visited = visited.concat(unique_faces);
        return unique_faces.map(f => ({
          face: f,
          parent: current.face,
          edge: graph.faces_vertices[f]
            .filter(v => graph.faces_vertices[current.face].indexOf(v) !== -1)
            .sort((a,b) => a-b)
        }))
      }).reduce((prev,curr) => prev.concat(curr),[]);
    } while(list[list.length-1].length > 0);
    if(list.length > 0 && list[list.length-1].length == 0){ list.pop(); }
    return list;
  };
  const flatten_frame = function (fold_file, frame_num){
    if ("file_frames" in fold_file === false ||
      fold_file.file_frames.length < frame_num) {
      return fold_file;
    }
    const dontCopy = ["frame_parent", "frame_inherit"];
    var memo = {visited_frames:[]};
    function recurse(fold_file, frame, orderArray) {
      if (memo.visited_frames.indexOf(frame) !== -1) {
        throw "FOLD file_frames encountered a cycle. stopping.";
        return orderArray;
      }
      memo.visited_frames.push(frame);
      orderArray = [frame].concat(orderArray);
      if (frame === 0) { return orderArray; }
      if (fold_file.file_frames[frame - 1].frame_inherit &&
         fold_file.file_frames[frame - 1].frame_parent != null) {
        return recurse(fold_file, fold_file.file_frames[frame - 1].frame_parent, orderArray);
      }
      return orderArray;
    }
    return recurse(fold_file, frame_num, []).map(frame => {
      if (frame === 0) {
        let swap = fold_file.file_frames;
        fold_file.file_frames = null;
        let copy = JSON.parse(JSON.stringify(fold_file));
        fold_file.file_frames = swap;
        delete copy.file_frames;
        dontCopy.forEach(key => delete copy[key]);
        return copy;
      }
      let copy = JSON.parse(JSON.stringify(fold_file.file_frames[frame-1]));
      dontCopy.forEach(key => delete copy[key]);
      return copy;
    }).reduce((prev,curr) => Object.assign(prev,curr),{})
  };
  var css_colors = {
    "black": "#000000",
    "silver": "#c0c0c0",
    "gray": "#808080",
    "white": "#ffffff",
    "maroon": "#800000",
    "red": "#ff0000",
    "purple": "#800080",
    "fuchsia": "#ff00ff",
    "green": "#008000",
    "lime": "#00ff00",
    "olive": "#808000",
    "yellow": "#ffff00",
    "navy": "#000080",
    "blue": "#0000ff",
    "teal": "#008080",
    "aqua": "#00ffff",
    "orange": "#ffa500",
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "blanchedalmond": "#ffebcd",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "oldlace": "#fdf5e6",
    "olivedrab": "#6b8e23",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "whitesmoke": "#f5f5f5",
    "yellowgreen": "#9acd32"
  };
  const css_color_names = Object.keys(css_colors);
  const svg_to_fold = function (svg$$1) {
    let graph = {
      "file_spec": 1.1,
      "file_creator": "Rabbit Ear",
      "file_classes": ["singleModel"],
      "frame_title": "",
      "frame_classes": ["creasePattern"],
      "frame_attributes": ["2D"],
      "vertices_coords": [],
      "vertices_vertices": [],
      "vertices_faces": [],
      "edges_vertices": [],
      "edges_faces": [],
      "edges_assignment": [],
      "edges_foldAngle": [],
      "edges_length": [],
      "faces_vertices": [],
      "faces_edges": [],
    };
    let vl = graph.vertices_coords.length;
    let segments$$1 = withAttributes(svg$$1);
    graph.vertices_coords = segments$$1
      .map(s => [[s.x1, s.y1], [s.x2, s.y2]])
      .reduce((a,b) => a.concat(b), []);
    return graph;
    graph.edges_vertices = segments$$1.map((_,i) => [vl+i*2, vl+i*2+1]);
    graph.edges_assignment = segments$$1.map(l => color_to_assignment(l.stroke));
    graph.edges_foldAngle = graph.edges_assignment.map(a =>
      (a === "M" ? -180 : (a === "V" ? 180 : 0))
    );
    return graph;
  };
  const color_to_assignment = function (string) {
    let c = [0,0,0,1];
    if (string[0] === "#") {
      c = hexToComponents(string);
    } else if (css_color_names.indexOf(string) !== -1) {
      c = hexToComponents(css_colors[string]);
    }
    const ep = 0.05;
    if (c[0] < ep && c[1] < ep && c[2] < ep) { return "F"; }
    if (c[0] > c[1] && (c[0] - c[2]) > ep) { return "V"; }
    if (c[2] > c[1] && (c[2] - c[0]) > ep) { return "M"; }
    return "F";
  };
  const hexToComponents = function (h) {
    let r = 0, g = 0, b = 0, a = 255;
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    } else if (h.length == 5) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
      a = "0x" + h[4] + h[4];
    } else if (h.length == 9) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
      a = "0x" + h[7] + h[8];
    }
    return [+(r / 255), +(g / 255), +(b / 255), +(a / 255)];
  };
  const removeChildren = function (parent) {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };
  const getClassList = function (xmlNode) {
    const currentClass = xmlNode.getAttribute("class");
    return (currentClass == null
      ? []
      : currentClass.split(" ").filter(s => s !== ""));
  };
  const addClass = function (xmlNode, newClass) {
    if (xmlNode == null) {
      return;
    }
    const classes = getClassList(xmlNode)
      .filter(c => c !== newClass);
    classes.push(newClass);
    xmlNode.setAttributeNS(null, "class", classes.join(" "));
    return xmlNode;
  };
  const removeClass = function (xmlNode, removedClass) {
    if (xmlNode == null) {
      return;
    }
    const classes = getClassList(xmlNode)
      .filter(c => c !== removedClass);
    xmlNode.setAttributeNS(null, "class", classes.join(" "));
    return xmlNode;
  };
  const setClass = function (xmlNode, className) {
    xmlNode.setAttributeNS(null, "class", className);
    return xmlNode;
  };
  const setID = function (xmlNode, idName) {
    xmlNode.setAttributeNS(null, "id", idName);
    return xmlNode;
  };
  const setViewBox = function (svg, x, y, width, height, padding = 0) {
    const scale = 1.0;
    const d = (width / scale) - width;
    const X = (x - d) - padding;
    const Y = (y - d) - padding;
    const W = (width + d * 2) + padding * 2;
    const H = (height + d * 2) + padding * 2;
    const viewBoxString = [X, Y, W, H].join(" ");
    svg.setAttributeNS(null, "viewBox", viewBoxString);
  };
  const setDefaultViewBox = function (svg) {
    const size = svg.getBoundingClientRect();
    const width = (size.width === 0 ? 640 : size.width);
    const height = (size.height === 0 ? 480 : size.height);
    setViewBox(svg, 0, 0, width, height);
  };
  const getViewBox = function (svg) {
    const vb = svg.getAttribute("viewBox");
    return (vb == null
      ? undefined
      : vb.split(" ").map(n => parseFloat(n)));
  };
  const scaleViewBox = function (svg, scale, origin_x = 0, origin_y = 0) {
    if (scale < 1e-8) { scale = 0.01; }
    const matrix = svg.createSVGMatrix()
      .translate(origin_x, origin_y)
      .scale(1 / scale)
      .translate(-origin_x, -origin_y);
    const viewBox = getViewBox(svg);
    if (viewBox == null) {
      setDefaultViewBox(svg);
    }
    const top_left = svg.createSVGPoint();
    const bot_right = svg.createSVGPoint();
    [top_left.x, top_left.y] = viewBox;
    bot_right.x = viewBox[0] + viewBox[2];
    bot_right.y = viewBox[1] + viewBox[3];
    const new_top_left = top_left.matrixTransform(matrix);
    const new_bot_right = bot_right.matrixTransform(matrix);
    setViewBox(svg,
      new_top_left.x,
      new_top_left.y,
      new_bot_right.x - new_top_left.x,
      new_bot_right.y - new_top_left.y);
  };
  const translateViewBox = function (svg, dx, dy) {
    const viewBox = getViewBox(svg);
    if (viewBox == null) {
      setDefaultViewBox(svg);
    }
    viewBox[0] += dx;
    viewBox[1] += dy;
    svg.setAttributeNS(null, "viewBox", viewBox.join(" "));
  };
  const convertToViewBox = function (svg, x, y) {
    const pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    const svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());
    const array = [svgPoint.x, svgPoint.y];
    array.x = svgPoint.x;
    array.y = svgPoint.y;
    return array;
  };
  const attachClassMethods = function (element) {
    element.removeChildren = function () {
      return removeChildren(element);
    };
    element.addClass = function (...args) {
      return addClass(element, ...args);
    };
    element.removeClass = function (...args) {
      return removeClass(element, ...args);
    };
    element.setClass = function (...args) {
      return setClass(element, ...args);
    };
    element.setID = function (...args) {
      return setID(element, ...args);
    };
  };
  const attachViewBoxMethods = function (element) {
    element.setViewBox = function (...args) {
      return setViewBox(element, ...args);
    };
    element.getViewBox = function (...args) {
      return getViewBox(element, ...args);
    };
    element.scaleViewBox = function (...args) {
      return scaleViewBox(element, ...args);
    };
    element.translateViewBox = function (...args) {
      return translateViewBox(element, ...args);
    };
    element.convertToViewBox = function (...args) {
      return convertToViewBox(element, ...args);
    };
  };
  const attachAppendableMethods = function (element, methods) {
    Object.keys(methods).forEach((key) => {
      element[key] = function (...args) {
        const g = methods[key](...args);
        element.appendChild(g);
        return g;
      };
    });
  };
  let DOMParser$1$1 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.DOMParser;
  if (typeof DOMParser$1$1 === "undefined" || DOMParser$1$1 === null) {
    DOMParser$1$1 = require("xmldom").DOMParser;
  }
  let XMLSerializer$1$1 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.XMLSerializer;
  if (typeof XMLSerializer$1$1 === "undefined" || XMLSerializer$1$1 === null) {
    XMLSerializer$1$1 = require("xmldom").XMLSerializer;
  }
  let document$1$1 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.document;
  if (typeof document$1$1 === "undefined" || document$1$1 === null) {
    document$1$1 = new DOMParser$1$1()
      .parseFromString("<!DOCTYPE html><title>a</title>", "text/html");
  }
  const svgNS$1 = "http://www.w3.org/2000/svg";
  const setPoints = function (polygon, pointsArray) {
    if (pointsArray == null || pointsArray.constructor !== Array) {
      return;
    }
    const pointsString = pointsArray.map(el => (el.constructor === Array
      ? el
      : [el.x, el.y]))
      .reduce((prev, curr) => `${prev}${curr[0]},${curr[1]} `, "");
    polygon.setAttributeNS(null, "points", pointsString);
  };
  const setArc = function (shape, x, y, radius,
    startAngle, endAngle, includeCenter = false) {
    const start = [
      x + Math.cos(startAngle) * radius,
      y + Math.sin(startAngle) * radius];
    const vecStart = [
      Math.cos(startAngle) * radius,
      Math.sin(startAngle) * radius];
    const vecEnd = [
      Math.cos(endAngle) * radius,
      Math.sin(endAngle) * radius];
    const arcVec = [vecEnd[0] - vecStart[0], vecEnd[1] - vecStart[1]];
    const py = vecStart[0] * vecEnd[1] - vecStart[1] * vecEnd[0];
    const px = vecStart[0] * vecEnd[0] + vecStart[1] * vecEnd[1];
    const arcdir = (Math.atan2(py, px) > 0 ? 0 : 1);
    let d = (includeCenter
      ? `M ${x},${y} l ${vecStart[0]},${vecStart[1]} `
      : `M ${start[0]},${start[1]} `);
    d += ["a ", radius, radius, 0, arcdir, 1, arcVec[0], arcVec[1]].join(" ");
    if (includeCenter) { d += " Z"; }
    shape.setAttributeNS(null, "d", d);
  };
  const line = function (x1, y1, x2, y2) {
    const shape = document$1$1.createElementNS(svgNS$1, "line");
    if (x1) { shape.setAttributeNS(null, "x1", x1); }
    if (y1) { shape.setAttributeNS(null, "y1", y1); }
    if (x2) { shape.setAttributeNS(null, "x2", x2); }
    if (y2) { shape.setAttributeNS(null, "y2", y2); }
    attachClassMethods(shape);
    return shape;
  };
  const circle = function (x, y, radius) {
    const shape = document$1$1.createElementNS(svgNS$1, "circle");
    if (x) { shape.setAttributeNS(null, "cx", x); }
    if (y) { shape.setAttributeNS(null, "cy", y); }
    if (radius) { shape.setAttributeNS(null, "r", radius); }
    attachClassMethods(shape);
    return shape;
  };
  const ellipse = function (x, y, rx, ry) {
    const shape = document$1$1.createElementNS(svgNS$1, "ellipse");
    if (x) { shape.setAttributeNS(null, "cx", x); }
    if (y) { shape.setAttributeNS(null, "cy", y); }
    if (rx) { shape.setAttributeNS(null, "rx", rx); }
    if (ry) { shape.setAttributeNS(null, "ry", ry); }
    attachClassMethods(shape);
    return shape;
  };
  const rect = function (x, y, width, height) {
    const shape = document$1$1.createElementNS(svgNS$1, "rect");
    if (x) { shape.setAttributeNS(null, "x", x); }
    if (y) { shape.setAttributeNS(null, "y", y); }
    if (width) { shape.setAttributeNS(null, "width", width); }
    if (height) { shape.setAttributeNS(null, "height", height); }
    attachClassMethods(shape);
    return shape;
  };
  const polygon = function (pointsArray) {
    const shape = document$1$1.createElementNS(svgNS$1, "polygon");
    setPoints(shape, pointsArray);
    attachClassMethods(shape);
    return shape;
  };
  const polyline = function (pointsArray) {
    const shape = document$1$1.createElementNS(svgNS$1, "polyline");
    setPoints(shape, pointsArray);
    attachClassMethods(shape);
    return shape;
  };
  const bezier = function (fromX, fromY, c1X, c1Y, c2X, c2Y, toX, toY) {
    const pts = [[fromX, fromY], [c1X, c1Y], [c2X, c2Y], [toX, toY]]
      .map(p => p.join(","));
    const d = `M ${pts[0]} C ${pts[1]} ${pts[2]} ${pts[3]}`;
    const shape = document$1$1.createElementNS(svgNS$1, "path");
    shape.setAttributeNS(null, "d", d);
    attachClassMethods(shape);
    return shape;
  };
  const text = function (textString, x, y) {
    const shape = document$1$1.createElementNS(svgNS$1, "text");
    shape.innerHTML = textString;
    shape.setAttributeNS(null, "x", x);
    shape.setAttributeNS(null, "y", y);
    attachClassMethods(shape);
    return shape;
  };
  const wedge = function (x, y, radius, angleA, angleB) {
    const shape = document$1$1.createElementNS(svgNS$1, "path");
    setArc(shape, x, y, radius, angleA, angleB, true);
    attachClassMethods(shape);
    return shape;
  };
  const arc = function (x, y, radius, angleA, angleB) {
    const shape = document$1$1.createElementNS(svgNS$1, "path");
    setArc(shape, x, y, radius, angleA, angleB, false);
    attachClassMethods(shape);
    return shape;
  };
  const regularPolygon = function (cX, cY, radius, sides) {
    const halfwedge = 2 * Math.PI / sides * 0.5;
    const r = Math.cos(halfwedge) * radius;
    const points = Array.from(Array(sides)).map((el, i) => {
      const a = -2 * Math.PI * i / sides + halfwedge;
      const x = cX + r * Math.sin(a);
      const y = cY + r * Math.cos(a);
      return [x, y];
    });
    return polygon(points);
  };
  const svgNS$1$1 = "http://www.w3.org/2000/svg";
  const straightArrow = function (startPoint, endPoint, options) {
    const p = {
      color: "#000",
      strokeWidth: 0.5,
      strokeStyle: "",
      fillStyle: "",
      highlight: undefined,
      highlightStrokeStyle: "",
      highlightFillStyle: "",
      width: 0.5,
      length: 2,
      padding: 0.0,
      start: false,
      end: true,
    };
    if (typeof options === "object" && options !== null) {
      Object.assign(p, options);
    }
    const arrowFill = [
      "stroke:none",
      `fill:${p.color}`,
      p.fillStyle,
    ].filter(a => a !== "").join(";");
    const arrowStroke = [
      "fill:none",
      `stroke:${p.color}`,
      `stroke-width:${p.strokeWidth}`,
      p.strokeStyle,
    ].filter(a => a !== "").join(";");
    const thinStroke = Math.floor(p.strokeWidth * 3) / 10;
    const thinSpace = Math.floor(p.strokeWidth * 6) / 10;
    const highlightStroke = [
      "fill:none",
      `stroke:${p.highlight}`,
      `stroke-width:${p.strokeWidth * 0.5}`,
      `stroke-dasharray:${thinStroke} ${thinSpace}`,
      "stroke-linecap:round",
      p.strokeStyle,
    ].filter(a => a !== "").join(";");
    const highlightFill = [
      "stroke:none",
      `fill:${p.highlight}`,
      p.fillStyle,
    ].filter(a => a !== "").join(";");
    let start = startPoint;
    let end = endPoint;
    const vec = [end[0] - start[0], end[1] - start[1]];
    const arrowLength = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
    const arrowVector = [vec[0] / arrowLength, vec[1] / arrowLength];
    const arrow90 = [arrowVector[1], -arrowVector[0]];
    start = [
      startPoint[0] + arrowVector[0] * (p.start ? 1 : 0) * p.padding,
      startPoint[1] + arrowVector[1] * (p.start ? 1 : 0) * p.padding,
    ];
    end = [
      endPoint[0] - arrowVector[0] * (p.end ? 1 : 0) * p.padding,
      endPoint[1] - arrowVector[1] * (p.end ? 1 : 0) * p.padding,
    ];
    const endHead = [
      [end[0] + arrow90[0] * p.width, end[1] + arrow90[1] * p.width],
      [end[0] - arrow90[0] * p.width, end[1] - arrow90[1] * p.width],
      [end[0] + arrowVector[0] * p.length, end[1] + arrowVector[1] * p.length],
    ];
    const startHead = [
      [start[0] - arrow90[0] * p.width, start[1] - arrow90[1] * p.width],
      [start[0] + arrow90[0] * p.width, start[1] + arrow90[1] * p.width],
      [start[0] - arrowVector[0] * p.length, start[1] - arrowVector[1] * p.length],
    ];
    const arrow = document$1$1.createElementNS(svgNS$1$1, "g");
    const l = line(start[0], start[1], end[0], end[1]);
    l.setAttribute("style", arrowStroke);
    arrow.appendChild(l);
    if (p.end) {
      const endArrowPoly = polygon(endHead);
      endArrowPoly.setAttribute("style", arrowFill);
      arrow.appendChild(endArrowPoly);
    }
    if (p.start) {
      const startArrowPoly = polygon(startHead);
      startArrowPoly.setAttribute("style", arrowFill);
      arrow.appendChild(startArrowPoly);
    }
    if (p.highlight !== undefined) {
      const hScale = 0.6;
      const centering = [
        arrowVector[0] * p.length * 0.09,
        arrowVector[1] * p.length * 0.09,
      ];
      const endHeadHighlight = [
        [centering[0] + end[0] + arrow90[0] * (p.width * hScale),
          centering[1] + end[1] + arrow90[1] * (p.width * hScale)],
        [centering[0] + end[0] - arrow90[0] * (p.width * hScale),
          centering[1] + end[1] - arrow90[1] * (p.width * hScale)],
        [centering[0] + end[0] + arrowVector[0] * (p.length * hScale),
          centering[1] + end[1] + arrowVector[1] * (p.length * hScale)],
      ];
      const startHeadHighlight = [
        [-centering[0] + start[0] - arrow90[0] * (p.width * hScale),
          -centering[1] + start[1] - arrow90[1] * (p.width * hScale)],
        [-centering[0] + start[0] + arrow90[0] * (p.width * hScale),
          -centering[1] + start[1] + arrow90[1] * (p.width * hScale)],
        [-centering[0] + start[0] - arrowVector[0] * (p.length * hScale),
          -centering[1] + start[1] - arrowVector[1] * (p.length * hScale)],
      ];
      const highline = line(start[0], start[1], end[0], end[1]);
      highline.setAttribute("style", highlightStroke);
      arrow.appendChild(highline);
      if (p.end) {
        const endArrowHighlight = polygon(endHeadHighlight);
        endArrowHighlight.setAttribute("style", highlightFill);
        arrow.appendChild(endArrowHighlight);
      }
      if (p.start) {
        const startArrowHighlight = polygon(startHeadHighlight);
        startArrowHighlight.setAttribute("style", highlightFill);
        arrow.appendChild(startArrowHighlight);
      }
    }
    return arrow;
  };
  const arcArrow = function (start, end, options) {
    const p = {
      color: "#000",
      strokeWidth: 0.5,
      width: 0.5,
      length: 2,
      bend: 0.3,
      pinch: 0.618,
      padding: 0.5,
      side: true,
      start: false,
      end: true,
      strokeStyle: "",
      fillStyle: "",
    };
    if (typeof options === "object" && options !== null) {
      Object.assign(p, options);
    }
    const arrowFill = [
      "stroke:none",
      `fill:${p.color}`,
      p.fillStyle,
    ].filter(a => a !== "").join(";");
    const arrowStroke = [
      "fill:none",
      `stroke:${p.color}`,
      `stroke-width:${p.strokeWidth}`,
      p.strokeStyle,
    ].filter(a => a !== "").join(";");
    let startPoint = start;
    let endPoint = end;
    let vector = [endPoint[0] - startPoint[0], endPoint[1] - startPoint[1]];
    let midpoint = [startPoint[0] + vector[0] / 2, startPoint[1] + vector[1] / 2];
    let len = Math.sqrt(vector[0]*vector[0]+vector[1]*vector[1]);
    var minLength = (p.start ? (1+p.padding) : 0 + p.end ? (1+p.padding) : 0)
      * p.length * 2.5;
    if (len < minLength) {
      let minVec = [vector[0]/len * minLength, vector[1]/len * minLength];
      startPoint = [midpoint[0]-minVec[0]*0.5, midpoint[1]-minVec[1]*0.5];
      endPoint = [midpoint[0]+minVec[0]*0.5, midpoint[1]+minVec[1]*0.5];
      vector = [endPoint[0]-startPoint[0], endPoint[1]-startPoint[1]];
    }
    let perpendicular = [vector[1], -vector[0]];
    let bezPoint = [
      midpoint[0] + perpendicular[0]*(p.side?1:-1) * p.bend,
      midpoint[1] + perpendicular[1]*(p.side?1:-1) * p.bend
    ];
    let bezStart = [bezPoint[0] - startPoint[0], bezPoint[1] - startPoint[1]];
    let bezEnd = [bezPoint[0] - endPoint[0], bezPoint[1] - endPoint[1]];
    let bezStartLen = Math.sqrt(bezStart[0]*bezStart[0]+bezStart[1]*bezStart[1]);
    let bezEndLen = Math.sqrt(bezEnd[0]*bezEnd[0]+bezEnd[1]*bezEnd[1]);
    let bezStartNorm = [bezStart[0]/bezStartLen, bezStart[1]/bezStartLen];
    let bezEndNorm = [bezEnd[0]/bezEndLen, bezEnd[1]/bezEndLen];
    let startHeadVec = [-bezStartNorm[0], -bezStartNorm[1]];
    let endHeadVec = [-bezEndNorm[0], -bezEndNorm[1]];
    let startNormal = [startHeadVec[1], -startHeadVec[0]];
    let endNormal = [endHeadVec[1], -endHeadVec[0]];
    let arcStart = [
      startPoint[0] + bezStartNorm[0]*p.length*((p.start?1:0)+p.padding),
      startPoint[1] + bezStartNorm[1]*p.length*((p.start?1:0)+p.padding)
    ];
    let arcEnd = [
      endPoint[0] + bezEndNorm[0]*p.length*((p.end?1:0)+p.padding),
      endPoint[1] + bezEndNorm[1]*p.length*((p.end?1:0)+p.padding)
    ];
    vector = [arcEnd[0]-arcStart[0], arcEnd[1]-arcStart[1]];
    perpendicular = [vector[1], -vector[0]];
    midpoint = [arcStart[0] + vector[0]/2, arcStart[1] + vector[1]/2];
    bezPoint = [
      midpoint[0] + perpendicular[0]*(p.side?1:-1) * p.bend,
      midpoint[1] + perpendicular[1]*(p.side?1:-1) * p.bend
    ];
    let controlStart = [
      arcStart[0] + (bezPoint[0] - arcStart[0]) * p.pinch,
      arcStart[1] + (bezPoint[1] - arcStart[1]) * p.pinch
    ];
    let controlEnd = [
      arcEnd[0] + (bezPoint[0] - arcEnd[0]) * p.pinch,
      arcEnd[1] + (bezPoint[1] - arcEnd[1]) * p.pinch
    ];
    let startHeadPoints = [
      [arcStart[0]+startNormal[0]*-p.width, arcStart[1]+startNormal[1]*-p.width],
      [arcStart[0]+startNormal[0]*p.width, arcStart[1]+startNormal[1]*p.width],
      [arcStart[0]+startHeadVec[0]*p.length,arcStart[1]+startHeadVec[1]*p.length]
    ];
    let endHeadPoints = [
      [arcEnd[0]+endNormal[0]*-p.width, arcEnd[1]+endNormal[1]*-p.width],
      [arcEnd[0]+endNormal[0]*p.width, arcEnd[1]+endNormal[1]*p.width],
      [arcEnd[0]+endHeadVec[0]*p.length, arcEnd[1]+endHeadVec[1]*p.length]
    ];
    let arrowGroup = document$1$1.createElementNS(svgNS$1$1, "g");
    let arrowArc = bezier(
      arcStart[0], arcStart[1], controlStart[0], controlStart[1],
      controlEnd[0], controlEnd[1], arcEnd[0], arcEnd[1]
    );
    arrowArc.setAttribute("style", arrowStroke);
    arrowGroup.appendChild(arrowArc);
    if (p.start) {
      let startHead = polygon(startHeadPoints);
      startHead.setAttribute("style", arrowFill);
      arrowGroup.appendChild(startHead);
    }
    if (p.end) {
      let endHead = polygon(endHeadPoints);
      endHead.setAttribute("style", arrowFill);
      arrowGroup.appendChild(endHead);
    }
    return arrowGroup;
  };
  const svgNS$2 = "http://www.w3.org/2000/svg";
  const drawMethods = {
    line,
    circle,
    ellipse,
    rect,
    polygon,
    polyline,
    bezier,
    text,
    wedge,
    arc,
    straightArrow,
    arcArrow,
    regularPolygon,
  };
  const setupSVG = function (svgImage) {
    attachClassMethods(svgImage);
    attachViewBoxMethods(svgImage);
    attachAppendableMethods(svgImage, drawMethods);
  };
  const svg$1 = function () {
    const svgImage = document$1$1.createElementNS(svgNS$2, "svg");
    svgImage.setAttribute("version", "1.1");
    svgImage.setAttribute("xmlns", svgNS$2);
    setupSVG(svgImage);
    return svgImage;
  };
  const group = function () {
    const g = document$1$1.createElementNS(svgNS$2, "g");
    attachClassMethods(g);
    attachAppendableMethods(g, drawMethods);
    return g;
  };
  const style = function () {
    const s = document$1$1.createElementNS(svgNS$2, "style");
    s.setAttribute("type", "text/css");
    return s;
  };
  drawMethods.group = group;
  const CREASE_NAMES = {
    B: "boundary", b: "boundary",
    M: "mountain", m: "mountain",
    V: "valley",   v: "valley",
    F: "mark",     f: "mark",
    U: "mark",     u: "mark",
  };
  const faces_sorted_by_layer = function (faces_layer) {
    return faces_layer.map((layer, i) => ({ layer, i }))
      .sort((a, b) => a.layer - b.layer)
      .map(el => el.i);
  };
  const make_faces_sidedness = function (graph) {
    let coloring = graph["faces_re:coloring"];
    if (coloring == null) {
      coloring = ("faces_re:matrix" in graph)
        ? faces_matrix_coloring(graph["faces_re:matrix"])
        : faces_coloring(graph, 0);
    }
    return coloring.map(c => (c ? "front" : "back"));
  };
  const finalize_faces = function (graph, svg_faces) {
    const orderIsCertain = graph["faces_re:layer"] != null
      && graph["faces_re:layer"].length === graph.faces_vertices.length;
    if (orderIsCertain) {
      make_faces_sidedness(graph)
        .forEach((side, i) => svg_faces[i].setAttribute("class", side));
    }
    return (orderIsCertain
      ? faces_sorted_by_layer(graph["faces_re:layer"]).map(i => svg_faces[i])
      : svg_faces);
  };
  const make_edge_assignment_names = function (graph) {
    return (graph.edges_vertices == null || graph.edges_assignment == null
      || graph.edges_vertices.length !== graph.edges_assignment.length
      ? []
      : graph.edges_assignment.map(a => CREASE_NAMES[a]));
  };
  const svgBoundaries = function (graph) {
    if ("edges_vertices" in graph === false
      || "vertices_coords" in graph === false) {
      return [];
    }
    const boundary = get_boundary_vertices(graph)
      .map(v => graph.vertices_coords[v]);
    const p = polygon(boundary);
    p.setAttribute("class", "boundary");
    return [p];
  };
  const svgVertices = function (graph, options) {
    if ("vertices_coords" in graph === false) {
      return [];
    }
    const radius = options && options.radius ? options.radius : 0.01;
    const svg_vertices = graph.vertices_coords
      .map(v => circle(v[0], v[1], radius));
    svg_vertices.forEach((c, i) => c.setAttribute("id", `${i}`));
    return svg_vertices;
  };
  const svgEdges = function (graph) {
    if ("edges_vertices" in graph === false
      || "vertices_coords" in graph === false) {
      return [];
    }
    const svg_edges = graph.edges_vertices
      .map(ev => ev.map(v => graph.vertices_coords[v]))
      .map(e => line(e[0][0], e[0][1], e[1][0], e[1][1]));
    svg_edges.forEach((edge, i) => edge.setAttribute("id", `${i}`));
    make_edge_assignment_names(graph)
      .forEach((a, i) => svg_edges[i].setAttribute("class", a));
    return svg_edges;
  };
  const svgFacesVertices = function (graph) {
    if ("faces_vertices" in graph === false
      || "vertices_coords" in graph === false) {
      return [];
    }
    const svg_faces = graph.faces_vertices
      .map(fv => fv.map(v => graph.vertices_coords[v]))
      .map(face => polygon(face));
    svg_faces.forEach((face, i) => face.setAttribute("id", `${i}`));
    return finalize_faces(graph, svg_faces);
  };
  const svgFacesEdges = function (graph) {
    if ("faces_edges" in graph === false
      || "edges_vertices" in graph === false
      || "vertices_coords" in graph === false) {
      return [];
    }
    const svg_faces = graph.faces_edges
      .map(face_edges => face_edges
        .map(edge => graph.edges_vertices[edge])
        .map((vi, i, arr) => {
          const next = arr[(i + 1) % arr.length];
          return (vi[1] === next[0] || vi[1] === next[1] ? vi[0] : vi[1]);
        }).map(v => graph.vertices_coords[v]))
      .map(face => polygon(face));
    svg_faces.forEach((face, i) => face.setAttribute("id", `${i}`));
    return finalize_faces(graph, svg_faces);
  };
  const svgFaces = function (graph) {
    if ("faces_vertices" in graph === true) {
      return svgFacesVertices(graph);
    }
    if ("faces_edges" in graph === true) {
      return svgFacesEdges(graph);
    }
    return [];
  };
  var components = {
    vertices: svgVertices,
    edges: svgEdges,
    faces: svgFaces,
    boundaries: svgBoundaries,
  };
  var defaultStyle = "svg * {\n  stroke-width:var(--crease-width);\n  stroke-linecap:round;\n  stroke:black;\n}\npolygon {fill:none; stroke:none; stroke-linejoin:bevel;}\n.boundary {fill:white; stroke:black;}\n.mark {stroke:#aaa;}\n.mountain {stroke:#f00;}\n.valley{\n  stroke:#00f;\n  stroke-dasharray:calc(var(--crease-width)*2) calc(var(--crease-width)*2);\n}\n.foldedForm .boundary {fill:none;stroke:none;}\n.foldedForm .faces polygon { stroke:black; }\n.foldedForm .faces .front { fill:#fff; }\n.foldedForm .faces .back { fill:#ddd; }\n.foldedForm .creases line { stroke:none; }\n";
  function vkXML$2 (text, step) {
    const ar = text.replace(/>\s{0,}</g, "><")
      .replace(/</g, "~::~<")
      .replace(/\s*xmlns\:/g, "~::~xmlns:")
      .split("~::~");
    const len = ar.length;
    let inComment = false;
    let deep = 0;
    let str = "";
    const space = (step != null && typeof step === "string" ? step : "\t");
    const shift = ["\n"];
    for (let si = 0; si < 100; si += 1) {
      shift.push(shift[si] + space);
    }
    for (let ix = 0; ix < len; ix += 1) {
      if (ar[ix].search(/<!/) > -1) {
        str += shift[deep] + ar[ix];
        inComment = true;
        if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1
          || ar[ix].search(/!DOCTYPE/) > -1) {
          inComment = false;
        }
      } else if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) {
        str += ar[ix];
        inComment = false;
      } else if (/^<\w/.exec(ar[ix - 1]) && /^<\/\w/.exec(ar[ix])
        && /^<[\w:\-\.\,]+/.exec(ar[ix - 1])
        == /^<\/[\w:\-\.\,]+/.exec(ar[ix])[0].replace("/", "")) {
        str += ar[ix];
        if (!inComment) { deep -= 1; }
      } else if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) === -1
        && ar[ix].search(/\/>/) === -1) {
        str = !inComment ? str += shift[deep++] + ar[ix] : str += ar[ix];
      } else if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
        str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
      } else if (ar[ix].search(/<\//) > -1) {
        str = !inComment ? str += shift[--deep] + ar[ix] : str += ar[ix];
      } else if (ar[ix].search(/\/>/) > -1) {
        str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
      } else if (ar[ix].search(/<\?/) > -1) {
        str += shift[deep] + ar[ix];
      } else if (ar[ix].search(/xmlns\:/) > -1 || ar[ix].search(/xmlns\=/) > -1) {
        str += shift[deep] + ar[ix];
      } else {
        str += ar[ix];
      }
    }
    return (str[0] === "\n") ? str.slice(1) : str;
  }
  let DOMParser$2 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.DOMParser;
  if (typeof DOMParser$2 === "undefined" || DOMParser$2 === null) {
    DOMParser$2 = require("xmldom").DOMParser;
  }
  let XMLSerializer$2 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.XMLSerializer;
  if (typeof XMLSerializer$2 === "undefined" || XMLSerializer$2 === null) {
    XMLSerializer$2 = require("xmldom").XMLSerializer;
  }
  let document$2 = (typeof window === "undefined" || window === null)
    ? undefined
    : window.document;
  if (typeof document$2 === "undefined" || document$2 === null) {
    document$2 = new DOMParser$2()
      .parseFromString("<!DOCTYPE html><title>a</title>", "text/html");
  }
  const svgNS$3 = "http://www.w3.org/2000/svg";
  const shadowFilter = function (id_name = "shadow") {
    const defs = document$2.createElementNS(svgNS$3, "defs");
    const filter = document$2.createElementNS(svgNS$3, "filter");
    filter.setAttribute("width", "200%");
    filter.setAttribute("height", "200%");
    filter.setAttribute("id", id_name);
    const blur = document$2.createElementNS(svgNS$3, "feGaussianBlur");
    blur.setAttribute("in", "SourceAlpha");
    blur.setAttribute("stdDeviation", "0.005");
    blur.setAttribute("result", "blur");
    const offset = document$2.createElementNS(svgNS$3, "feOffset");
    offset.setAttribute("in", "blur");
    offset.setAttribute("result", "offsetBlur");
    const flood = document$2.createElementNS(svgNS$3, "feFlood");
    flood.setAttribute("flood-color", "#000");
    flood.setAttribute("flood-opacity", "0.3");
    flood.setAttribute("result", "offsetColor");
    const composite = document$2.createElementNS(svgNS$3, "feComposite");
    composite.setAttribute("in", "offsetColor");
    composite.setAttribute("in2", "offsetBlur");
    composite.setAttribute("operator", "in");
    composite.setAttribute("result", "offsetBlur");
    const merge = document$2.createElementNS(svgNS$3, "feMerge");
    const mergeNode1 = document$2.createElementNS(svgNS$3, "feMergeNode");
    const mergeNode2 = document$2.createElementNS(svgNS$3, "feMergeNode");
    mergeNode2.setAttribute("in", "SourceGraphic");
    merge.appendChild(mergeNode1);
    merge.appendChild(mergeNode2);
    defs.appendChild(filter);
    filter.appendChild(blur);
    filter.appendChild(offset);
    filter.appendChild(flood);
    filter.appendChild(composite);
    filter.appendChild(merge);
    return defs;
  };
  function renderDiagrams (graph, renderGroup) {
    if (graph["re:diagrams"] === undefined) { return; }
    if (graph["re:diagrams"].length === 0) { return; }
    Array.from(graph["re:diagrams"]).forEach((instruction) => {
      if ("re:diagram_lines" in instruction === true) {
        instruction["re:diagram_lines"].forEach((crease) => {
          const creaseClass = ("re:diagram_line_classes" in crease)
            ? crease["re:diagram_line_classes"].join(" ")
            : "valley";
          const pts = crease["re:diagram_line_coords"];
          if (pts !== undefined) {
            const l = line(pts[0][0], pts[0][1], pts[1][0], pts[1][1]);
            l.setAttribute("class", creaseClass);
            renderGroup.appendChild(l);
          }
        });
      }
      if ("re:diagram_arrows" in instruction === true) {
        const r = bounding_rect(graph);
        const vmin = r[2] > r[3] ? r[3] : r[2];
        const prefs = {
          length: vmin * 0.09,
          width: vmin * 0.035,
          strokeWidth: vmin * 0.02,
        };
        instruction["re:diagram_arrows"].forEach((arrowInst) => {
          if (arrowInst["re:diagram_arrow_coords"].length === 2) {
            const p = arrowInst["re:diagram_arrow_coords"];
            let side = p[0][0] < p[1][0];
            if (Math.abs(p[0][0] - p[1][0]) < 0.1) {
              side = p[0][1] < p[1][1]
                ? p[0][0] < 0.5
                : p[0][0] > 0.5;
            }
            if (Math.abs(p[0][1] - p[1][1]) < 0.1) {
              side = p[0][0] < p[1][0]
                ? p[0][1] > 0.5
                : p[0][1] < 0.5;
            }
            prefs.side = side;
            const arrow = arcArrow(p[0], p[1], prefs);
            renderGroup.appendChild(arrow);
          }
        });
      }
    });
  }
  const DISPLAY_NAME = {
    vertices: "vertices",
    edges: "creases",
    faces: "faces",
    boundaries: "boundaries",
  };
  const fold_to_svg = function (fold, options = {}) {
    let graph = fold;
    const groups = {
      boundaries: true,
      faces: true,
      edges: true,
      vertices: false,
    };
    const o = {
      defaults: true,
      width: "500px",
      height: "500px",
      inlineStyle: true,
      stylesheet: defaultStyle,
      shadows: false,
      padding: 0,
      viewBox: null,
    };
    Object.assign(o, options);
    if (o.frame != null) {
      graph = flatten_frame(fold, o.frame);
    }
    if (o.svg == null) {
      o.svg = svg$1();
    }
    const file_classes = (graph.file_classes != null
      ? graph.file_classes : []).join(" ");
    const frame_classes = (graph.frame_classes != null
      ? graph.frame_classes : []).join(" ");
    const top_level_classes = [file_classes, frame_classes]
      .filter(s => s !== "")
      .join(" ");
    o.svg.setAttribute("class", top_level_classes);
    o.svg.setAttribute("width", o.width);
    o.svg.setAttribute("height", o.height);
    const styleElement = style();
    o.svg.appendChild(styleElement);
    Object.keys(groups)
      .filter(key => groups[key] === false)
      .forEach(key => delete groups[key]);
    Object.keys(groups).forEach((key) => {
      groups[key] = group();
      groups[key].setAttribute("class", DISPLAY_NAME[key]);
      o.svg.appendChild(groups[key]);
    });
    Object.keys(groups)
      .forEach(key => components[key](graph)
        .forEach(a => groups[key].appendChild(a)));
    if ("re:diagrams" in graph) {
      const instructionLayer = group();
      o.svg.appendChild(instructionLayer);
      renderDiagrams(graph, instructionLayer);
    }
    if (o.shadows) {
      const shadow_id = "face_shadow";
      const filter = shadowFilter(shadow_id);
      o.svg.appendChild(filter);
      Array.from(groups.faces.childNodes)
        .forEach(f => f.setAttribute("filter", `url(#${shadow_id})`));
    }
    const rect$$1 = bounding_rect(graph);
    if (o.viewBox != null) {
      setViewBox(o.svg, ...o.viewBox, o.padding);
    } else {
      setViewBox(o.svg, ...rect$$1, o.padding);
    }
    if (o.inlineStyle) {
      const vmin = rect$$1[2] > rect$$1[3] ? rect$$1[3] : rect$$1[2];
      const innerStyle = `\nsvg { --crease-width: ${vmin * 0.005}; }\n${o.stylesheet}`;
      const docu = (new DOMParser$2())
        .parseFromString("<xml></xml>", "application/xml");
      const cdata = docu.createCDATASection(innerStyle);
      styleElement.appendChild(cdata);
    }
    const stringified = (new XMLSerializer$2()).serializeToString(o.svg);
    const beautified = vkXML$2(stringified);
    return beautified;
  };
  const convert = {
    components,
    toSVG: (input, options) => {
      if (typeof input === "object" && input !== null) {
        return fold_to_svg(input, options);
      }
      if (typeof input === "string" || input instanceof String) {
        try {
          const obj = JSON.parse(input);
          return fold_to_svg(obj, options);
        } catch (error) {
          throw error;
        }
      }
      return "";
    },
    toFOLD: (input, options) => {
      if (typeof input === "string") {
        const svg = (new DOMParser())
          .parseFromString(input, "text/xml").documentElement;
        return svg_to_fold(svg, options);
      }
      return svg_to_fold(input, options);
    },
  };

  const bounding_rect$1 = function (graph) {
    if ("vertices_coords" in graph === false
      || graph.vertices_coords.length <= 0) {
      return [0, 0, 0, 0];
    }
    const dimension = graph.vertices_coords[0].length;
    const min = Array(dimension).fill(Infinity);
    const max = Array(dimension).fill(-Infinity);
    graph.vertices_coords.forEach(v => v.forEach((n, i) => {
      if (n < min[i]) { min[i] = n; }
      if (n > max[i]) { max[i] = n; }
    }));
    return (isNaN(min[0]) || isNaN(min[1]) || isNaN(max[0]) || isNaN(max[1])
      ? [0, 0, 0, 0]
      : [min[0], min[1], max[0] - min[0], max[1] - min[1]]);
  };
  const clone = function (o) {
    let newO;
    let i;
    if (typeof o !== "object") {
      return o;
    }
    if (!o) {
      return o;
    }
    if (Object.prototype.toString.apply(o) === "[object Array]") {
      newO = [];
      for (i = 0; i < o.length; i += 1) {
        newO[i] = clone(o[i]);
      }
      return newO;
    }
    newO = {};
    for (i in o) {
      if (o.hasOwnProperty(i)) {
        newO[i] = clone(o[i]);
      }
    }
    return newO;
  };
  const flatten_frame$1 = function (fold_file, frame_num) {
    if ("file_frames" in fold_file === false
      || fold_file.file_frames.length < frame_num) {
      return fold_file;
    }
    const dontCopy = ["frame_parent", "frame_inherit"];
    const memo = { visited_frames: [] };
    const recurse = function (recurse_fold, frame, orderArray) {
      if (memo.visited_frames.indexOf(frame) !== -1) {
        throw new Error("encountered a cycle in file_frames. can't flatten.");
      }
      memo.visited_frames.push(frame);
      orderArray = [frame].concat(orderArray);
      if (frame === 0) { return orderArray; }
      if (recurse_fold.file_frames[frame - 1].frame_inherit
         && recurse_fold.file_frames[frame - 1].frame_parent != null) {
        return recurse(recurse_fold, recurse_fold.file_frames[frame - 1].frame_parent, orderArray);
      }
      return orderArray;
    };
    return recurse(fold_file, frame_num, []).map((frame) => {
      if (frame === 0) {
        const swap = fold_file.file_frames;
        fold_file.file_frames = null;
        const copy = clone(fold_file);
        fold_file.file_frames = swap;
        delete copy.file_frames;
        dontCopy.forEach(key => delete copy[key]);
        return copy;
      }
      const outerCopy = clone(fold_file.file_frames[frame - 1]);
      dontCopy.forEach(key => delete outerCopy[key]);
      return outerCopy;
    }).reduce((prev, curr) => Object.assign(prev, curr), {});
  };

  const findFinal = function (fold_file, frame_class) {
    const finalCP = fold_file.file_frames
      .filter(f => f.frame_classes.includes("final")
        && f.frame_classes.includes(frame_class)).shift();
    if (finalCP !== undefined) { return finalCP; }
    const final_frame = fold_file.file_frames[fold_file.file_frames.length - 1];
    if ("frame_classes" in final_frame === true
      && final_frame.frame_classes.includes(frame_class)) {
      return clone(final_frame);
    }
    if ("file_frames" in final_frame === true) {
      const found_index = final_frame.file_frames
        .map((frame, i) => ("frame_classes" in frame === true
          && frame.frame_classes.includes(frame_class) ? i : undefined))
        .filter(el => el !== undefined)
        .shift();
      if (found_index !== undefined) {
        return clone(flatten_frame$1(final_frame, found_index + 1));
      }
    }
    return {};
  };
  const buildPage = function (fold, options) {
    const fold_file = JSON.parse(JSON.stringify(fold));
    const file_keys = Object.keys(fold_file)
      .filter(key => key.substring(0, 5) === "file_");
    const meta = {};
    file_keys.forEach((key) => { meta[key] = fold_file[key]; });
    if (meta.file_title == null) { meta.file_title = "Origami"; }
    if (meta.file_author == null) { meta.file_author = ""; }
    if (meta.file_description == null) { meta.file_description = ""; }
    const steps = fold_file.file_frames.filter(frame => frame.frame_classes.includes("diagrams"));
    const finalCP = findFinal(fold_file, "creasePattern");
    const finalFoldedForm = findFinal(fold_file, "foldedForm");
    steps.filter(s => s.file_classes == null)
      .forEach((s) => { s.file_classes = []; });
    if (finalCP.file_classes == null) { finalCP.file_classes = []; }
    if (finalFoldedForm.file_classes == null) {
      finalFoldedForm.file_classes = [];
    }
    steps.forEach(s => s.file_classes.push("step"));
    finalCP.file_classes.push("header");
    finalFoldedForm.file_classes.push("header");
    const finishedFormRect = bounding_rect$1(finalFoldedForm);
    const invVMax = 1.0 - (finishedFormRect[2] > finishedFormRect[3]
      ? finishedFormRect[2] : finishedFormRect[3]);
    const invertedWidth = 1.0 - finishedFormRect[2];
    const invertedHeight = 1.0 - finishedFormRect[3];
    let fold_time = Math.floor(steps.length / 4);
    if (fold_time === 0) { fold_time = 1; }
    const size_ratio_float = (finishedFormRect[2] > finishedFormRect[3]
      ? finishedFormRect[2] : finishedFormRect[3]);
    const size_ratio = `1 : ${size_ratio_float === 1
    ? size_ratio_float
    : size_ratio_float.toFixed(2)}`;
    const sequenceSVGs = steps
      .map(cp => convert.toSVG(cp, {
        inlineStyle: false,
        diagram: true,
        frame: 1,
        padding: 0.15
      }));
    const cpSVG = convert.toSVG(finalCP, {
      inlineStyle: false,
      diagram: false,
      padding: 0.02
    });
    const finalSVG = convert.toSVG(finalFoldedForm, {
      inlineStyle: false,
      diagram: false,
      padding: 0.02
    });
    finalFoldedForm.file_classes.push("scaled");
    const finalSVGScaled = convert.toSVG(finalFoldedForm, {
      inlineStyle: false,
      diagram: false,
      viewBox: [finishedFormRect[0], finishedFormRect[1] - invertedHeight, 1, 1]
    });
    const writtenInstructions = sequenceSVGs
      .map((svg, i) => steps[i]["re:diagrams"])
      .filter(a => a != null)
      .map(seq => seq.map(a => a["re:diagram_instructions"])
        .filter(a => a != null)
        .map(inst => inst.en)
        .join("\n"));
    const sequenceHTML = sequenceSVGs
      .reduce((prev, curr, i) => `${prev}
<div class="step">
  <h3 class="number">${(i + 1)}</h3>
  ${curr}
  <p>${(writtenInstructions[i] || "")}</p>
</div>
`, "");
    return `<html>
<head>
<title>Rabbit Ear</title>
<style>
${options.style}
</style>
</head>
<body>
  <div class="page-grid">
    <div class="header">
      ${cpSVG}
      ${finalSVG}
      ${finalSVGScaled}
      <h1 class="title">${meta.file_title}</h1>
      <p class="author">designed by ${meta.file_author}</p>
      <p class="description">${meta.file_description}</p>
      <p class="size-ratio">ratio ${size_ratio}</p>
      <p class="fold-time">fold time<br>${fold_time} ${(fold_time === 1 ? "minute" : "minutes")}</p>
      <p class="attribution small">rabbitEar.org</p>
    </div>
    ${sequenceHTML}
  </div>
</body>
</html>`;
  };

  const DiagramMaker = function (fold_file, options = {}) {
    if (fold_file.length === 0) { return ""; }
    const o = {};
    Object.assign(o, options);
    if (o.shadows == null) { o.shadows = false; }
    if (o.style == null) { o.style = defaultPageStyle; }
    return buildPage(fold_file, o);
  };

  return DiagramMaker;

})));