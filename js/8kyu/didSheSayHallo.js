// input is string, case insensitive, won't need to check it's subset
// return boolean: true if word is one of the greetings, false if not

function validateHello(greetings) {
    const languages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    
    // Check if greetings is included in languages array
    return languages.includes(greetings.toLowerCase());
  }
  
  // validateHello("ciao") returns true
  // validateHello("nope") returns false