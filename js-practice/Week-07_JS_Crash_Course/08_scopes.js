const increment = function () {
  let count = 0;

  function plus() {
    count++;
    return count;
  }
  return plus();
};

console.log(increment());
