const decodeTheRing = function (s, p) {
  let sindex = 0;
  let pindex = 0;

  while(sindex < s.length && pindex < p.length){
    if (p[pindex] === '*') {
      if (pindex === p.length -1) {
        return true;
      }
    }
  }
  };
  
  module.exports = decodeTheRing;