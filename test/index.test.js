
describe('index.js的测试', function () {
  it('1应该是数字', function() {
      isNum(1).should.equal(true)
  })
  it('"1" 应该是字符', function() {
      isString('1').should.equal(true)
  })
})