export function genRandomNumbers() {
  //genRandomNumbers = function () {
  //var genRandomNumbers = function genRandomNumbers() {

  let rNum = [];
  for (let i = 0; i < 100; i++) {
    let rnd = Math.floor(Math.random() * 9999) + 1;
    rNum.push(rnd);
  }
  return rNum;
}