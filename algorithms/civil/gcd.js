function gcd(a, b) {
  if (b === 0) { // BASE CASE
    return a;
  }
  return gcd(b, a % b); // RECURSIVE CASE
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}


console.log(gcd(48, 18)); // 6
console.log(lcm(15, 10)); // 30

const data = [1, 0, 1, 0, 1, 0, 1, 0];
const generator = [1, 0, 0, 0, 1, 1, 0, 1];

let r = [];
function permute(str, prefix = "") {
  if (str.length === 0) {
    r.push(prefix)
    console.log(prefix)
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.slice(0, i) + str.slice(i + 1);
      permute(rem, prefix + str[i]);
    }
  }
}

permute("abc");
console.log(r)

