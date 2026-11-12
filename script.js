function secondHighest(arr) {
  if (!arr || arr.length < 2) {
    return "-Infinity";
  }

  // Use actual numeric -Infinity for mathematical comparisons
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

  // Convert back to string "-Infinity" if no second highest exists (e.g., [1, 1, 1])
  return secondHighest === -Infinity ? "-Infinity" : secondHighest;
}
