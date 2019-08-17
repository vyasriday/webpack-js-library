function findLongestUniqueSubstring(string) {
  let substringsArray = [];
  for (let i = 0; i < string.length; i++) {
    let substring = '';
    for (let j = i; j < string.length; j++) {
      if (substring.includes(string[j])) {
        break;
      } else {
        substring += string[j];
      }
    }
    substringsArray.push(substring);
  }
  return substringsArray.sort((a, b) => b.length - a.length)[0];
}

export default findLongestUniqueSubstring;
