describe("Friendly Date Ranges", function() {

  it("returns ordinal numbers for 1 and 4 to test 'st' and 'th'", function() {
    var result = ['July 1st', '4th'];
    expect(makeFriendlyDates(['2016-07-01', '2016-07-04'])).toEqual(result);
  });

  it('returns ordinal numbers for two digit days that end with either 1 or 4', function() {
    var result = ['July 21st', '14th'];
    expect(makeFriendlyDates(['2016-07-21', '2016-07-14'])).toEqual(result);
  })

  it('returns ordinal numbers for 2 and 3 to test nd and rd', function() {
    var result = ['July 2nd', '3rd'];
    expect(makeFriendlyDates(['2016-07-02', '2016-07-03'])).toEqual(result)
  })

  it('returns ordinal numbers for two digit days that end with either 2 or 3', function() {
    var result = ['July 22nd', '23rd'];
    expect(makeFriendlyDates(['2016-07-22', '2016-07-23'])).toEqual(result);
  })

  it('returns th for the rest of the numbers', function() {
    var result = ['July 5th', '6th'];
    expect(makeFriendlyDates(['2016-07-05', '2016-07-06'])).toEqual(result);
  })

  it('when both dates are exactly the same and the year is current', function() {
    var result = ['July 5th'];
    expect(makeFriendlyDates(['2016-07-05', '2016-07-05'])).toEqual(result);
  })

  it('returns January for 01 and February for 02', function() {
    var result = ['Jan 5th', 'Feb 5th'];
    expect(makeFriendlyDates(['2016-01-05', '2016-02-05'])).toEqual(result);
  })

  it('same year, but it is not current', function() {
    var result = ['Jan 18th, 2014', 'Sept 19th']
    expect(makeFriendlyDates(['2014-01-18', '2014-09-19'])).toEqual(result);
  })

  it('same year, but it is not current; same month', function() {
    var result = ['Jan 18th, 2014', '19th']
    expect(makeFriendlyDates(['2014-01-18', '2014-01-19'])).toEqual(result);
  })

  it('same year, but it is not current; same month & day', function() {
    var result = ['Jan 18th, 2014']
    expect(makeFriendlyDates(['2014-01-18', '2014-01-18'])).toEqual(result);
  })


});
