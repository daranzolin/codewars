/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/
function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
*/
function solution(roman){
  var kv = ({M:1000, D:500, C:100, L:50, X:10, V:5, I:1})
  var chars = roman.split('')
  var ivs = chars.filter(d => d == 'V' | d == 'I')
  var i_ind = ivs.indexOf('I')
  var v_ind = ivs.indexOf('V')
  var i_after_v = i_ind > v_ind
  var non_is = chars.filter(d => d != "I")
  var is = chars.length - non_is.length
  var is_only = is === chars.length
  if (is_only) {
    return is
  }
  var vals_to_sum = []
  for (let i = 0; i < chars.length; i++) {
      vals_to_sum.push(kv[chars[i]])
  }
  var out = vals_to_sum.reduce((a, b) => a+b)
  if (i_after_v) {
    return out
  } else {
    out = out - (is * 2)
  }
  return out
}

/*
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
*/
function digPow(n, p){
  let x = n.toString().split('').map(e => +e)
  let pow_seq = [];
  let seq_start = p;
  for (let i = 0; i < x.length; i++) {
    pow_seq[i] = seq_start;
    seq_start++;
  }
  let lh = x.map((e, i) => Math.pow(e, pow_seq[i])).reduce((a, b) => a + b);
  let rh = lh / n;
  return rh % 1 === 0 ? rh : -1;
}

/*
Write a function that accepts str string and key number and returns an array of integers representing encoded str
*/
function encode(str,  n)
{
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let arr = str.split('').map(l => {
  return letters.indexOf(l) + 1;
  });
let repTimes = Math.ceil(arr.length / (n.toString().split('').length));
let adder = Array(repTimes)
                      .fill(n).join('')
                      .slice(0, arr.length)
                      .toString()
                      .split('')
                      .map(e => +e);
return arr.map((num, idx) => {
  return num + adder[idx];
});
}

/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).
*/
function SeriesSum(n)
{
let arr = Array.from(new Array(n), (x,i) => i)
                .map(e => e + 1)
                .map(d => ((d - 1) * 3) + 1)
                .map(d => 1/d)
if (arr.length === 0) {
  return "0.00"
}
return arr.reduce((a, b) => a + b)
          .toFixed(2)
          .toString();
}

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/
function digital_root(n) {
  function dr(num) {
    let numArr = num.toString().split('').map(n => +n);
    return numArr.reduce(function(a, b) { return a + b; }, 0);
  }
  cond = true;
  let s = n;
  while(cond) {
    s = dr(s);
    if (s < 10) {
      cond = false;
    }
  }
  return s;
}

/*
he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
*/
function iqTest(numbers){
  numArr = numbers.split(' ').map(n => +n);
  let evens = 0;
  let odds = 0;
  numArr.forEach(n => {
    if (n % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  });
  let ind = evens > odds? numArr.findIndex(n => n % 2 !== 0) : numArr.findIndex(n => n % 2 === 0)
  return ind + 1
}

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
*/
function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let clean_text = text.toLowerCase()
                      .split('')
                      .filter(e => letters.includes(e));
  clean_text.forEach((l, i, arr) => {
    arr[i] = letters.indexOf(l) + 1;
    });
  return clean_text.join(' ');
}
