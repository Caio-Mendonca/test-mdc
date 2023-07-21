const fs = require('fs');

function countWords(text) {
  // Remove extra whitespaces and normalize accented characters
  const normalizedText = text.replace(/\s+/g, ' ').normalize('NFD');
  // Remove diacritics (accents) and convert to lowercase
  const sanitizedText = normalizedText.replace(/[\u0300-\u036f]/g, '').toLowerCase();
  // Split the text into words based on whitespace
  const words = sanitizedText.split(/\s+/);
  // Filter out empty strings (caused by multiple spaces)
  const validWords = words.filter(word => word !== '');

  return {
    words: validWords.length,
    characters: text.length,
  };
}

function readAndCountStats(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const stats = countWords(data);
    console.log(`Number of words: ${stats.words}`);
    console.log(`Number of characters (including spaces): ${stats.characters}`);
  });
}

// Replace 'input.txt' with the path to your text file
const filePath = 'test.txt';
readAndCountStats(filePath);
