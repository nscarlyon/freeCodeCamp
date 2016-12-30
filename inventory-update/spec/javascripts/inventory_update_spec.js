describe("Inventory Update", function() {

  it("returns an array", function() {
    var curInv = [[21, "Bowling Ball"]]
    var newInv = [[10, "Bowling Ball"]];
    var isArray = Array.isArray(updateInventory(curInv, newInv));
    expect(isArray).toEqual(true);
  })

  it("returns array with updated number of items when both arrays contain the same items", function() {
   var curInv = [[21, "Bowling Ball"]];
   var newInv = [[10, "Bowling Ball"]];
   var result = [[31, "Bowling Ball"]];

   expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("returns updated inventory when there is more than one item", function() {
    var curInv = [[21, "Bowling Ball"], [2, "Hair Pin"]];
    var newInv = [[10, "Bowling Ball"], [3, "Hair Pin"]];
    var result = [[31, "Bowling Ball"], [5, "Hair Pin"]];

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("returns updated inventory including items that do not need to be updated", function() {
    var curInv = [[21, "Bowling Ball"], [2, "Hair Pin"], [2, "Tooth Brush"]];
    var newInv = [[10, "Bowling Ball"], [3, "Hair Pin"]];
    var result = [[31, "Bowling Ball"], [5, "Hair Pin"], [2, "Tooth Brush"]];

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("returns updated inventory including unique items from new inventory", function() {
    var curInv = [[21, "Bowling Ball"], [2, "Hair Pin"], [2, "Tooth Brush"]];
    var newInv = [[10, "Bowling Ball"], [3, "Hair Pin"], [1, "Toy"], [7, "Yak"]];
    var result = [[31, "Bowling Ball"], [5, "Hair Pin"], [2, "Tooth Brush"], [1, "Toy"], [7, "Yak"]];

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("returns array in alphabetical order", function() {
    var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
    var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
    var result = [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("If curInv is empty, it should return newInv", function() {
    var curInv = [];
    var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
    var result = [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })

  it("If items have 0, it should still be included in the updated inventory", function() {
    var curInv = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]];
    var newInv = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]];
    var result = [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]];

    expect(updateInventory(curInv, newInv)).toEqual(result);
  })
});
