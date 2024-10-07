/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
   
    const stack = [];
    
    
    for (let char of s) {
        if (char in bracketMap) {  
            const topElement = stack.length > 0 ? stack.pop() : '#';
            
            // If the popped element doesn't match the corresponding opening bracket, return false
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // At the end, the stack should be empty if all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };


