"use strict";

let testExpect = (actual, expected) => {
  if (actual === expected) {
    console.log(`Test Passed: ${actual} : ${expected}`);
  } else {
    console.log(`Test Failed: ${actual} : ${expected}`);
  }
};

let newsApp = new NewsApp();
