function isAnagram(s1, s2) {
  const first = s1.toLowerCase()
  const second = s2.toLowerCase()

  let cleanFirst = ""
  let cleanSecond = ""
  const frequencyFirst = {}
  const frequencySecond = {}

  for(const char of first){
    // console.log(char);
    
    if(char >= "a" && char <= "z"){
      cleanFirst += char
      frequencyFirst[char] = (frequencyFirst[char] || 0 ) + 1; 
    }
  }

  for(const char of second){
    if(char >= "a" && char <= "z"){
      cleanSecond += char
      frequencySecond[char] = (frequencySecond[char] || 0 ) + 1;
    }
  }
  if(cleanFirst.length !== cleanSecond.length){
    return false
  }

  for(const char in frequencyFirst){
    if(frequencyFirst[char] !== frequencySecond[char]){
        return false
    }
  }
  return true
}

console.log(isAnagram("listen", "silent"));
