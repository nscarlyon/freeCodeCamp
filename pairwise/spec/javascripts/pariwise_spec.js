describe("Pairwise", function() {

  it("adds two elements that equal the second argument", function() {
    expect(pairwise([1, 2, 3], 3)).toEqual(1);
  });

  it("adds all the indices of pairs that equal the second argument", function() {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toEqual(11);
  });

  it("if there are repeated element pairs, pick the one with the lowest sum of indices", function() {
    expect(pairwise([1, 1, 1], 2)).toEqual(1);
  });

  it("if there are pairwise elements with distinct, but the same numbers, still add the indices", function() {
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toEqual(10);
  });

  it("if there is an empty array and a sum, it should return 0", function() {
    expect(pairwise([], 100)).toEqual(0);
  });

});
