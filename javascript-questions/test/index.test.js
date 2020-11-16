const assert = require('assert');
const data = require('../super-heroes.json');
const {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
} = require('../index');

describe('Javascript questions tests', function() {
  describe('getDCHeroes()', function() {
    it('Should return the correct number of marvel characters', function() {
      assert.equal(getDCHeroes(data).length, 10);
    });
  });

  describe('convertCharactersToArray()', function() {
    it('Should have an array for the characters property instead of string ', function() {
      const val = convertCharactersToArray(data);
      val.forEach((hero) => {
        assert.equal(Array.isArray(hero.characters), true);
      })
    });
  });

  describe('groupByPublisher()', function() {
    it('Should group characters by publisher', function() {
      const val = groupByPublisher(data);
      assert.equal(val['DC Comics'].length, 10);
      assert.equal(val['Marvel Comics'].length, 10);
    });
  });

  describe('getDCHeroesWithMoreThanOneCharacter()', function() {
    it('Should have heroes with more than 1 character', function() {
      const val = getDCHeroesWithMoreThanOneCharacter(data);
      assert.equal(val.length, 4);
    });
  });
});
