/* es un evaluador de cadenas de parentesis */
/* recibe un string con parentesis y si los parentesis cierran correctamente devuelve true, como un analizador sintactico */

// isValidParentheses("()")         // Output: true
// isValidParentheses("()[]{}")     // Output: true
// isValidParentheses("(]")         // Output: false
// isValidParentheses("([)]")       // Output: false
// isValidParentheses("{[]}")       // Output: true
// isValidParentheses("[")          // Output: false

export const isValidParentheses = (str: string) => {
  const stack = [];

  // Creamos un mapa para mapear paréntesis de apertura a cierre
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // Recorremos cada carácter en la cadena de entrada
  for (const char of str) {
    // Si el carácter es un paréntesis de apertura, lo agregamos a la pila
    if (map[char]) {
      stack.push(char);
    } else {
      // Si el carácter es un paréntesis de cierre
      // verificamos si la pila está vacía o si el último paréntesis abierto no coincide
      if (stack.length === 0 || map[stack.pop()] !== char) {
        return false; // No coinciden los paréntesis
      }
    }
  }

  // Si la pila está vacía al final, todos los paréntesis se cerraron correctamente
  return stack.length === 0;
};
