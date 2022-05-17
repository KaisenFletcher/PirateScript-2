
function piratize(input) {

    const arr = input.split(' ')
  
    return arr.map((word) => {
      if (word === "pounds") return "doubloons"
      return word.match(/[A-z]/i) ? `${word.substr(1)}${word.substr(0, 1)}arr` : word
    }).join(' ');

  }
  