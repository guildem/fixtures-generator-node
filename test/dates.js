const dates = require('../src/fixtures/dates')

describe('dates', function() {

  describe('.timestamp()', function() {
    it('should return a timestamp', function() {
      dates.timestamp().should.be.a('number')
    })
  })

  describe('.last()', function() {
    it('should return the last timestamp', function() {
      const timestamp = dates.timestamp()
      dates.last().should.equals(timestamp)
    })
  })

  describe('.after()', function() {
    it('should return a timestamp after last one', function() {
      const timestamp = dates.last()
      dates.after().should.be.a('number').and.at.least(timestamp)
    })
  })

  describe('.before()', function() {
    it('should return a timestamp before last one', function() {
      const timestamp = dates.last()
      dates.before().should.be.a('number').and.at.most(timestamp)
    })
  })

})
