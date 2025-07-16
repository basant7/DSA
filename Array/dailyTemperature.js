var dailyTemperatures = function (temperatures) {
  let answers = [];
  for (let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    let count = 1;
    while (j < temperatures.length) {
      if (temperatures[j] > temperatures[i]) {
        answers.push(count);
        break;
      }
      count++;
      j++;
    }
    if (j >= temperatures.length) {
      answers.push(0);
    }
  }
  return answers;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
