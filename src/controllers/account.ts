import nameGenerator from "unique-names-generator";

function getName(wordLength) {
   return nameGenerator.uniqueNamesGenerator({
      dictionaries: [nameGenerator.adjectives, nameGenerator.animals, nameGenerator.colors], // colors can be omitted here as not used
      length: wordLength
   });
}
const getRandom = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
export const getRandomUser = () => {
   return {
      "firstName": getName(1),
      "lastName": getName(1),
      "email": `${getName(2)}_${getRandom(0, 999)}@mailinator.com`
   }
}
