function secondHighest(arr) {
  if (!arr || arr.length < 2) {
    return -Infinity;
  }

  // Convert elements to Numbers to handle mixed types or string conversions in tests
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = Number(arr[i]);

    if (current > highest) {
      secondHighest = highest;
      highest = current;
    } else if (current > secondHighest && current < highest) {
      secondHighest = current;
    }
  }

  return secondHighest;
}
