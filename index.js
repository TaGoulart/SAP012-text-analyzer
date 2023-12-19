import analyzer from "./analyzer.js";
const textarea = document.querySelector('[name="user-input"]'); 
const button = document.getElementById("reset-button"); 
const wordCount = document.querySelector('[data-testid="word-count"]'); 
const characterCount = document.querySelector('[data-testid="character-count"]'); 
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]'); 
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]'); 
const numberCount = document.querySelector('[data-testid="number-count"]'); 
const numberSum = document.querySelector('[data-testid="number-sum"]'); 

textarea.addEventListener("keyup", allMetricsUpdate); 
button.addEventListener("click", clearAllMetricsAndText); 

function clearAllMetricsAndText() {  
  textarea.value = "";
  wordCount.textContent = "Number of words: 0"; 
  characterCount.textContent = "Total number of characters: 0";
  characterNoSpacesCount.textContent = "Char Count Without Space Count: 0";
  numberCount.textContent = "Number Count: 0";
  numberSum.textContent = "Total Sum of Numbers: 0";
  wordLengthAverage.textContent = "Average Word Length: 0";
}

textarea.addEventListener('input', allMetricsUpdate);

function allMetricsUpdate() { 
  const text = textarea.value; // Use 'value' para obter o conteúdo do textarea
  wordCount.textContent = "Number of words: " + analyzer.getWordCount(text);
  characterCount.textContent = "Total number of characters: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Char Count Without Space Count: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Number Count: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Total Sum of Numbers: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Average Word Length: " + analyzer.getAverageWordLength(text);
}
