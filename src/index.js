const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' ',
};

module.exports = function decode(expr) {
  function splitByLen(len, str) {
    const chunks = [];
    for (let start = 0; start < str.length; start += len) {
      const chunk = str.slice(start, start + len);
      chunks.push(chunk);
    }
    return chunks;
  }
  const encodedArr = splitByLen(10, expr);
  const decoded = encodedArr.map((sub) => {
    if (sub === '**********') return ' ';
    return splitByLen(2, sub)
      .map((el) => {
        if (el === '10') return '.';
        if (el === '11') return '-';
        return '';
      })
      .join('');
  });
  return decoded.map((el) => MORSE_TABLE[el]).join('');
};
