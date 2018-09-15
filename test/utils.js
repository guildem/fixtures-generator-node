const utils = require('../src/fixtures/utils')

describe('utils', function() {

  describe('.oneOf()', function() {
    it('should return one of array', function() {
      const array = [1, '2', {v:3}, [4]]
      utils.oneOf(array).should.be.oneOf(array)
    })
    it('should return nothing', function() {
      should.not.exist(utils.oneOf([]))
      should.not.exist(utils.oneOf())
    })
  })

})
