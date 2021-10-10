let it = (label, testCallback) => {
  console.log(`Test: ${label}`)
  testCallback()
};

const expect = (actual) => {
  return {
    toEqual: (expected) => {
      if (actual === expected) {
        console.log(`Pass`)
      } else {
        console.log(`Fail, expected ${expected} but got ${actual}`)
      }
    },
    toNotEqual: (unexpected) => {
      if (actual === unexpected) {
        console.log(`Fail, expected and actual were the same`)
      } else {
        console.log(`Pass`)
      }
    },
    toBeAnArray: () => {
      if (actual instanceof Array) {
        console.log(`Pass`)
      } else {
        console.log(`Fail, actual is ${actual}`)
      }
    },
    toContain: (contained) => {
      //const result = actual.includes(contained)
      let result = false
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === contained) {
          result = true
        }
      }
      if (result) {
        console.log(`Pass`)
      } else {
        console.log(`Fail`)
      }
    }
  }
}
