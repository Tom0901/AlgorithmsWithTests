//Given a string return the first non repeating characters index. If it doesn't exist return -1

const pass = "Hannah.";
const fail = "hahhaaf";

const fun = (input) => {
  //sanitise the input
  input = input.replace(/[^0-9a-z]/gi, "").toLowerCase();
  //use dual pointers to check equality of chars
  let left = 0;
  let right = input.length - 1;
  while (left < right) {
    if (input[left] !== input[right]) return false;
    left++;
    right--;
  }
  return true;
};

module.exports = {
  f: fun,
  i: pass,
  i2: fail,
};

console.log(fun(pass));
