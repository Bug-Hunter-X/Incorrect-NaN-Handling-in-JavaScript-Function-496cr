function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle cases where a or b is NaN
  }
  return a / b; 
}