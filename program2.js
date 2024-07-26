const decodeTheRing = function (s, p) {
  let sindex = 0;
  let pindex = 0;

  while(sindex < s.length && pindex < p.length){
    if (p[pindex] === '*') {
      if (pindex === p.length -1) {
        return true;
      }
      let nextChar = p[pindex + 1];
      let nextCharindex = s.indexof(nextChar, sindex);

      if (nextCharindex === -1) {
        
      }
    }
  }
  };
  
  module.exports = decodeTheRing;