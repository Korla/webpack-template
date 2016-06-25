var {module} = require('./module');

describe('A test', () => {
  it('runs', () => {
    expect(module()).toEqual('Success');
  })
})
