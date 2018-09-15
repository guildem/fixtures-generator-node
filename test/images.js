const images = require('../src/fixtures/images')

describe('images', function() {

  describe('.fakeImageUrl()', function() {
    it('should return an image url', function() {
      images.fakeImageUrl().should.match(/^https?:\/\/[^\/]+\/.*$/ig)
    })
  })

  describe('.realImageUrl()', function() {
    it('should return an image url', function() {
      images.realImageUrl().should.match(/^https?:\/\/[^\/]+\/.*$/ig)
    })
  })

  describe('.avatarUrl()', function() {
    it('should return an image url', function() {
      images.avatarUrl().should.match(/^https?:\/\/[^\/]+\/.*$/ig)
    })
  })

})
