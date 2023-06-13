/*var isValid = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (())
    }
}*/


const isValid = function(s) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (brackets[char]) {
        // If the character is an opening bracket, push it to the stack
        stack.push(char);
      } else {
        // If the character is a closing bracket
        const lastBracket = stack.pop();
  
        // Check if there is a corresponding opening bracket
        if (char !== brackets[lastBracket]) {
          return false;
        }
      }
    }
  
    // If there are any remaining brackets in the stack, the string is invalid
    return stack.length === 0;
  };
