const superHeroes = require('./super-heroes.json');

/**
 * 
 * Utility filter for any parameter of the heroes list
 * @returns [
 * {
 *   ...hero
 *   <parameter>: <filter by value>
 * },
 * ...
 * ]
 */
const filterHeroes = (heroes, key, val) => {
  return heroes.filter(hero => hero[key] === val);
};

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
  return filterHeroes(heroes, 'publisher', 'Marvel Comics');
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
  const publisherGroups = {};

  heroes.forEach(hero => {
    publisherGroups[hero.publisher] = publisherGroups[hero.publisher] || [];
    publisherGroups[hero.publisher].push(hero);
  });

  return publisherGroups;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
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
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return filterHeroes(heroes, 'publisher', 'DC Comics');
}

module.exports = {
  convertCharactersToArray,
  getMarvelHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
