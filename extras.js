// EXTRAS.JS
// this file provides a starting point for further modifications
// to Lissajous. Load your samples and helper functions here.


// chorus and tremolo use tuna, so we should load it here
//var tuna = new Tuna(context);


// _rint is a random integer generator, useful for
// creating random melodies on the fly.
function _rint(length, min, max) {
  var numbers = [];
  for(var i = 0; i < length; i++) {
    numbers.push( Math.floor(Math.random() * (max - min) + min) );
  }
  return numbers;
}


// _m is for multiplicity. the first argument is the value,
// the second argument is the number of times you want to
// repeat it. e.g. `_m(4, 8)` produces [4, 4, 4, 4, 4, 4, 4, 4]
// and `_m([0,1,2], 3)` produces [0, 1, 2, 0, 1, 2, 0, 1, 2].
// the Lissajous API will combine multiple array arguments
// into a single array automatically, allowing you to do things
// like track.beat( _m(4, 8), _m(2, 16) )
function _m(value, iterations) {
  var values = [];
  for(var i = 0; i < iterations; i++) {
    if(Array.isArray(value)) {
      values = values.concat(value);
    } else {
      values.push(value);
    }
  }
  return values;
}

var oct = function(a){return [a,a+12];};
var rep = function(a,count){
    var o = [];
    for(var i = 0; i < count; i++){
        o = o.concat(a);
    }
    return o;
}

// Here's an example of how to load samples into an array.
// var pno = [];
// loadSounds([
//     './samples/pianosong/piano1.wav',
//     './samples/pianosong/pianobass.wav',
//     './samples/pianosong/pianodoodle.wav',
//     './samples/pianosong/bass.wav',
//     './samples/pianosong/synth.wav',
//     './samples/pianosong/perc.wav'
//   ],
//   function(list) {
//     pno = list;
// });
//
var bass = [].concat(rep(oct(60),4)).concat(rep(oct(63),2)).concat(rep(oct(58),2));
var leadRhythm = [2,1,1,2,2,1,1,2,2,2,2,1,1,2,2,1,1,1,1,1,1,1,1];
var lead = [].concat(rep([60],10)).concat(rep([63],4)).concat([65]).concat(rep([58],8));



var drums = [];
loadSounds([
    './samples/drums/kick.wav',
    './samples/drums/clap.wav'
  ],
  function(list) {
    drums = list;
});

var panic = function(){
    window.bass = [].concat(rep(oct(60),4)).concat(rep(oct(63),2)).concat(rep(oct(58),2));
    window.leadRhythm = [2,1,1,2,2,1,1,2,2,2,2,1,1,2,2,1,1,1,1,1,1,1,1];
    window.lead = [].concat(rep([60],10)).concat(rep([63],4)).concat([65]).concat(rep([58],8));

    window.d = new track();
    d.sample(drums);
    d.beat(4).sseq(0,1);
    window.b = new track();
    b.vol(0);
    b.square().adsr(0,1,0.4,0).beat(2).notes(bass).trans(-24).pan(-1,-1,1,1);
    window.l = new track();
    l.vol(0);
    l.saw().adsr(0,1,0,0).beat(leadRhythm).notes(lead).trans(12);
    console.log('bass is b, lead is l');
}
