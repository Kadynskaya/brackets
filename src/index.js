module.exports = function check(str, bracketsConfig) {
  let stack = [];
    let bracketsPairsObj = bracketsConfig.reduce((acc, [opening, closing]) => Object.assign(acc, { [opening]: closing }), {});

    for(let bracket of str.split('')) {
        if(bracket === bracketsPairsObj[bracket] && stack[stack.length - 1] === bracket) {
            stack.pop();
        } else if(bracketsPairsObj[bracket]){
            stack.push(bracket);
        } else if(bracket !== bracketsPairsObj[stack.pop()]) {
            return false;
        }
    }

  return !stack.length;
}
