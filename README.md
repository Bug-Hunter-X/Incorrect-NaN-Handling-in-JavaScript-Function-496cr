# Incorrect NaN Handling in JavaScript Function

This repository demonstrates a common error in JavaScript related to incorrect handling of NaN (Not a Number) values. The `foo` function is designed to divide two numbers, but it fails to account for scenarios where either `a` or `b` might be NaN. This leads to unexpected behavior and potentially incorrect results.

## Bug Description

The primary issue is in the condition `if (a === 0 || b === 0)`. This check only covers cases where `a` or `b` is strictly equal to 0. If either `a` or `b` is NaN, the function does not handle it correctly, resulting in NaN or Infinity as the return value.  Proper handling should be implemented to account for NaN values explicitly.

## Solution

The solution involves explicitly checking for NaN values before performing division. Using `isNaN()` and adding a conditional check to address the NaN case resolves the issue.