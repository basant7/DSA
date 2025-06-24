let s = "hello";

function characterFrequencyCounting(s) {
  let frequency = {};
  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]]) {
      frequency[s[i]]++;
    } else {
      frequency[s[i]] = 1;
    }
  }
  return frequency;
}

console.log(characterFrequencyCounting(s)); // Output: { h: 1, e: 1, l: 2, o: 1 }
