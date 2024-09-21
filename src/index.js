module.exports = function check(str, bracketsConfig) {

  const stack = [];
  const openBrackets = new Set();
  const bracketPairs = new Map();

  for (const [open, close] of bracketsConfig) {
      openBrackets.add(open);
      bracketPairs.set(open, close);
  }

  for (const char of str) {
      if (openBrackets.has(char)) {
          if (bracketPairs.get(char) === char && stack.length && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else {
          const lastOpen = stack.pop();
          if (bracketPairs.get(lastOpen) !== char) {
              return false;
          }
      }
  }
  return stack.length === 0;
}
