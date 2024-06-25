let array = [7, 20, 4, 3, 6, 5, 2];

function findLeader(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
      console.log(arr[i]);
    }
  }
}

// findLeader(array);

function findLeaderBetter(arr) {
  let leader = arr[arr.length - 1];
  console.log(leader);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (leader < arr[i]) {
      leader = arr[i];
      console.log(leader);
    }
  }
}

findLeaderBetter(array);
