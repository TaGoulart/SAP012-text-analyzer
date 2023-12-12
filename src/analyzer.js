
const analyzer = {
  getWordCount: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const countWordsInText = text.trim().split(" ");
    return countWordsInText.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const regex = /[ ,." ']/g; /*corresponde a espaços, vírgulas, pontos, aspas duplas e simples. Garantira que esses carac, sejam removidos*/
    const totalCharactere = text.replace(regex, "");
    return totalCharactere.length;
  },
  getAverageWordLength: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const wordsAndNumbersInText = text.trim().split(" ");
    let wordsLength = 0;
    for (let index = 0; index < wordsAndNumbersInText.length; index++) {
      const word = wordsAndNumbersInText[index];
      wordsLength = wordsLength + word.length;
    }

    const media = wordsLength / wordsAndNumbersInText.length;
    return parseFloat(media.toFixed(2));
  },
  getNumberCount: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let qntNumbers = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (typeof parseInt(word) === "number" && !isNaN(word)) {
        qntNumbers = qntNumbers + 1;
      }
    });
    return qntNumbers;
  },

  getNumberSum: (text) => {
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let numberSum = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (
        (typeof parseInt(word) === "number" ||
          typeof parseFloat(word) === "number") &&
        !isNaN(word)
      ) {
        numberSum = numberSum + +word; //convert a string to a number
      }
    });
    return numberSum;
  },
};

export default analyzer;