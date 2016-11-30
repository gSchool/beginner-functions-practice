describe('alertMe', function () {
  it('contain an alert method', function () {
    expect(alertMe).toBeDefined();
  })
})

describe('sleepMeasurer', function() {
  it('is defined', function() {
    expect(sleepMeasurer).toBeDefined();
  })

  it('contains the correct string', function() {
    expect(sleepMeasurer(4)).toContain('not');
    expect(sleepMeasurer(8)).toContain('enough');
    expect(sleepMeasurer(12)).toContain('master');
  })
})

describe('isDivisible', function() {
  it('is defined', function() {
    expect(isDivisible).toBeDefined();
  })

  it('returns correct boolean', function() {
    expect(isDivisible(4, 2)).toEqual(true);
    expect(isDivisible(7, 3)).toEqual(false);
    expect(isDivisible(6, 3)).toEqual(true);
  })
})
