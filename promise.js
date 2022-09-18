const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (resultEmotion) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const theaterPromise = theaterIXX.concat(theaterVGC)

  let countresultEmotion = 0;
  theaterPromise.forEach((result) => {
    if (result.hasil === resultEmotion) {
      countresultEmotion++;
    }
  })
  return countresultEmotion;
};

module.exports = {
  promiseOutput,
};
