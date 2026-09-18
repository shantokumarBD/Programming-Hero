function compressCharacters(str) {
  if (str === "") return "";

  let result = "";
  let currentChar = str[0];

  let count = 1;

  // console.log(currentChar);

  for (let i = 1; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] === currentChar) {
      count++;
    } else {
      if (count === 1) {
        result += currentChar;
      } else {
        result += currentChar + count;
      }

      currentChar = str[i];
      count = 1;
    }
  }
  if (count === 1) {
    result += currentChar;
  } else {
    result += currentChar + count;
  }

  return result;
}

console.log(compressCharacters("aaabbc"));

