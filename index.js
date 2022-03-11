import axios from 'axios';

const url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=pizza';
const word = 'pizza';

const main = async (word) => {
  try {
    const regWord = `\\b${word}\\b`;
    const specificWord = new RegExp(regWord, "g");
    const getData = await axios.get(url);
    const getDataKey = Object.keys(getData.data.query.pages)
    const getDataStr = getData.data.query.pages[getDataKey].extract;
    const wordCounter = countWord(getDataStr, specificWord);
    return wordCounter;

  } catch (error) {
    console.error(error);
  }
}

const countWord = async (str, find) => {
  return (str.split(find)).length - 1;
}

const lari = new Promise((resolve, reject) => {
  resolve(main(word));
}).then((kata) => {
  console.log(`kata ${word} ada sebanyak`, kata);
  return kata;
});
