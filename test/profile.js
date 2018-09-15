const profile = require('../src/fixtures/profile')

const loop = 1000

describe('profile', function() {

  describe('.firstname()', function() {
    it('should return a firstname', function() {
      for (let i = 0; i < loop; i++)
        profile.firstname().should.be.a('string')
    })
  })

  describe('.lastname()', function() {
    it('should return a lastname', function() {
      for (let i = 0; i < loop; i++)
        profile.lastname().should.be.a('string')
    })
  })

  describe('.fullname()', function() {
    it('should return a fullname', function() {
      for (let i = 0; i < loop; i++)
        profile.fullname().should.be.a('string')
    })
  })

  describe('.email()', function() {
    it('should return an email', function() {
      for (let i = 0; i < loop; i++)
        profile.email().should.be.a('string')
    })
  })

})
