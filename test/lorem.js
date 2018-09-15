const lorem = require('../src/fixtures/lorem')

const loop = 1000

describe('lorem', function() {

  describe('.word()', function() {
    it('should return one word', function() {
      for (let i = 0; i < loop; i++)
        lorem.word().should.match(/\w+/ig)
    })
  })

  describe('.words()', function() {
    it('should return words', function() {
      for (let i = 0; i < loop; i++)
        lorem.words().should.match(/^(\w+\s)+\w+\.$/ig)
    })
    it('should return words without ending dot', function() {
      for (let i = 0; i < loop; i++)
        lorem.words({sentence:false}).should.match(/^(\w+\s)+\w+$/ig)
    })
  })

  describe('.sentences()', function() {
    it('should return sentences', function() {
      for (let i = 0; i < loop; i++)
        lorem.sentences().should.match(/^((\w+\s)+\w+\.\s?)+$/ig)
    })
  })

  describe('.paragraphs()', function() {
    it('should return paragraphs', function() {
      for (let i = 0; i < loop; i++)
        lorem.paragraphs().should.match(/^(((\w+\s)+\w+\.\s?)+[\n]?)+$/ig)
    })
    it('should return paragraphs html style', function() {
      for (let i = 0; i < loop; i++)
        lorem.paragraphs({nl:'<br>'}).should.match(/^(((\w+\s)+\w+\.\s?)+(<br>)?)+$/ig)
    })
  })

})
