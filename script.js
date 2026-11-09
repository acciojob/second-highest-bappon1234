//your JS code here. If required.
function secondHighest(arr) {
  if (!arr || arr.length < 2) {
    return -Infinity;
  }

  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > highest) {
      secondHighest = highest;
      highest = current;
    } else if (current > secondHighest && current < highest) {
      secondHighest = current;
    }
  }

  return secondHighest;
}
