const mem = require('../src/fixtures/mem')

beforeEach(function() {
  mem.clear()
})

describe('mem', function() {

  describe('.keep()', function() {
    it('should return saved data', function() {
      mem.keep('test').should.equals('test')
      const object = { test: 'test' }
      mem.keep(object).should.equals(object)
      const array = [1, 2, 5, 9]
      mem.keep(array).should.equals(array)
    })
    it('should have aliases', function() {
      mem.save.should.equals(mem.keep)
      mem.memorize.should.equals(mem.keep)
      mem.retain.should.equals(mem.keep)
    })
  })

  describe('.one()', function() {
    it('should return saved data', function() {
      should.not.exist(mem.one())
      mem.keep('test')
      mem.one().should.equals('test')
    })
    it('should have aliases', function() {
      mem.get.should.equals(mem.one)
    })
  })

  describe('.pop()', function() {
    it('should pop saved data', function() {
      mem.keep('test')
      mem.pop().should.equals('test')
      should.not.exist(mem.pop())
    })
    it('should have aliases', function() {
      mem.get.should.equals(mem.one)
    })
  })

  describe('.all()', function() {
    it('should return all saved datas', function() {
      const array = [1, '2', {v:3}, [4]]
      array.forEach(v => mem.keep(v))
      mem.all().should.be.a('array').and.satisfy(a => a.length === 4)
    })
  })

  describe('.clear()', function() {
    it('should delete all saved datas', function() {
      const array = [1, '2', {v:3}, [4]]
      array.forEach(v => mem.keep(v))
      should.exist(mem.one())
      mem.clear()
      should.not.exist(mem.one())
    })
    it('should have aliases', function() {
      mem.clean.should.equals(mem.clear)
      mem.erase.should.equals(mem.clear)
    })
  })

})
