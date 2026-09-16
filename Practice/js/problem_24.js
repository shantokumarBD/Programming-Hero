function reverseLongestWord(sentence) {
  let longestWord = ""

  let world = sentence.split(' ') 
  
  for(let char of world){
    if(char.length > longestWord.length){
        longestWord = char
    }
  }

  let reverseWord = longestWord.split('').reverse().join('')
  
  return reverseWord
}

console.log(reverseLongestWord("hello world"));
