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

    describe('.array()', function() {
      it('should return an array with count elements', function() {
        utils.array(4, i => ({ id: i+1 }))
             .should.be.lengthOf(4)
             .and.have.deep.members([{id:1},{id:2},{id:3},{id:4}])
      })
      it('should return valid array', function() {
        utils.array(6, 'test').should.be.lengthOf(6)
      })
      it('should return empty array', function() {
        utils.array(-5).should.be.lengthOf(0)
      })
      it('should return empty array', function() {
        utils.array().should.be.lengthOf(0)
      })
    })

})
