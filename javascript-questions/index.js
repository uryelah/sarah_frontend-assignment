const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getMarvelHeroes = (heroes) => {
  return heroes.filter(hero => hero.publisher === 'Marvel Comics');
}

/**
 * Converts the characters property into an array
 * @returns [
 *  {
 *    ...hero,
 *    characters: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  return heroes.map(hero => Object.assign(hero, { characters: hero.characters.split() }))
}

//console.log(convertCharactersToArray(superHeroes));

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  return heroes;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes;
}

module.exports = {
  convertCharactersToArray,
  getMarvelHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
