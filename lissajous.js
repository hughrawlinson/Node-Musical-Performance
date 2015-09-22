var t = new track();
var h = new track();

var oct = function(a){return [a,a+12];};
var rep = function(a,count){
    var o = [];
    for(var i = 0; i < count; i++){
        o = o.concat(a);
    }
    return o;
}

// in case of demo fail, copy paste


var bass = [].concat(rep(oct(60),4)).concat(rep(oct(63),2)).concat(rep(oct(58),2));
var leadRhythm = [2,1,1,2,2,1,1,2,2,2,2,1,1,2,2,1,1,1,1,1,1,1,1];
var lead = [].concat(rep([60],10)).concat(rep([63],4)).concat([65]).concat(rep([58],8));

var d = new track();
d.sample(drums);
d.beat(4).sseq(0,1);
var t = new track();
t.vol(0);
t.square().adsr(0,1,0.4,0).beat(2).notes(bass).trans(-24);
var h = new track();
h.vol(0);
h.saw().adsr(0,1,0,0).beat(leadRhythm).notes(lead).trans(12);
