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
            
            
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }
    
    // At the end, the stack should be empty if all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };


