const number = require('../src/fixtures/numbers')

const loop = 1000

describe('numbers', function() {

  describe('.bool()', function() {
    it('should be a boolean', function() {
      for (let i = 0; i < loop; i++)
        number.bool().should.be.a('boolean')
    })
    it('should have aliases', function() {
      number.boolean.should.equals(number.bool)
    })
  })

  describe('.float()', function() {
    it('should be a number', function() {
      for (let i = 0; i < loop; i++)
        number.float().should.be.a('number')
    })
    it('should default return number between 0 and 1', function() {
      for (let i = 0; i < loop; i++)
        number.float().should.be.at.least(0).and.below(1)
    })
    it('should return 2 when min and max are 2', function() {
      for (let i = 0; i < loop; i++)
        number.float({min:2,max:2}).should.equals(2)
    })
    it('should return number lower than max', function() {
      for (let i = 0; i < loop; i++)
        number.float({max:20}).should.be.below(20)
    })
    it('should return number higher than min', function() {
      for (let i = 0; i < loop; i++)
        number.float({min:20}).should.be.at.least(20)
    })
    it('should have aliases', function() {
      number.number.should.equals(number.float)
    })
  })

  describe('.fixed()', function() {
    it('should be a string', function() {
      for (let i = 0; i < loop; i++)
        number.fixed().should.be.a('string')
    })
    it('should default to 2 decimals', function() {
      for (let i = 0; i < loop; i++)
        number.fixed().split('.').pop().length.should.equals(2)
    })
    it('should return 5 decimals', function() {
      for (let i = 0; i < loop; i++)
        number.fixed({decimals:5}).split('.').pop().length.should.equals(5)
    })
  })

  describe('.int()', function() {
    it('should be an integer', function() {
      for (let i = 0; i < loop; i++)
        number.int().should.satisfy(v => Number.isInteger(v))
    })
    it('should be a number by default', function() {
      for (let i = 0; i < loop; i++)
        number.int().should.be.a('number')
    })
    it('should be a positive number', function() {
      for (let i = 0; i < loop; i++)
        number.int({min:0}).should.be.a('number').at.least(0)
    })
    it('should be a negative number', function() {
      for (let i = 0; i < loop; i++)
        number.int({max:0}).should.be.a('number').below(0)
    })
    it('should have aliases', function() {
      number.integer.should.equals(number.int)
    })
  })

})
