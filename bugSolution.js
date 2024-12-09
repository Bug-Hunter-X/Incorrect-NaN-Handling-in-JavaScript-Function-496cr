function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values explicitly
  } else if (a === 0 || b === 0) {
    return 0; // Handle zero division
  } else {
    return a / b; 
  }
}