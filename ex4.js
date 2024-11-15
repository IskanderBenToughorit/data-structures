function isSeparator(char) {
    return " ,.;:".includes(char);
  }
  
  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  function isDigit(char) {
    return /[0-9]/.test(char);
  }
  
  function analyzeSentence(sentence) {
    let letters = 0, digits = 0, separators = 0, specials = 0;
  
    for (const char of sentence) {
      if (char === '#') break;
      if (isLetter(char)) letters++;
      else if (isDigit(char)) digits++;
      else if (isSeparator(char)) separators++;
      else specials++;
      

    }
    specials++;
    return { letters, digits, separators, specials };
  }
  
  // Example
  const sentence = "Hello, World! 12345.#";
  console.log(analyzeSentence(sentence));
  // { letters: 10, digits: 5, separators: 2, specials: 2 }
  