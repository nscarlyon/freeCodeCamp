describe("Exact Change", function() {

  var price = 19.50;
  var cash = 20.00;
  var cashInDrawer = [["PENNY", 100.00], ["NICKEL", 100.00], ["DIME", 100.00], ["QUARTER", 100.00], ["ONE", 100.00],
                      ["FIVE", 100.00], ["TEN", 100.00], ["TWENTY", 100.00], ["ONE HUNDRED", 1000.00]];

  it("returns 'Invalid Input' for wrong number of arguments", function() {
    var result = "Invalid Input";

    expect(checkCashRegister()).toEqual(result);
    expect(checkCashRegister(cash)).toEqual(result);
    expect(checkCashRegister(price, cash)).toEqual(result);
    expect(checkCashRegister(price, cash, cashInDrawer, "extra argument")).toEqual(result);
  })

  it("returns 'Invalid Input' if price and/or cash is NaN", function() {
    var NaNprice = "a";
    var NaNcash = "b";
    var result = "Invalid Input";

    expect(checkCashRegister(NaNprice, cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(price, NaNcash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(NaNprice, NaNcash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Invalid Input' if price and/or cash are negative numbers", function() {
    var result = "Invalid Input";

    expect(checkCashRegister(-price, cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(price, -cash, cashInDrawer)).toEqual(result);
    expect(checkCashRegister(-price, -cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Invalid Input' if cashInDrawer is not an array", function() {
    var cashInDrawer = {};
    var result = "Invalid Input";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Invalid Input' if cashInDrawer has an impossible total for any denomination", function() {
    var cashInDrawer = [["PENNY", "number"], ["NICKEL", .03], ["DIME", .11], ["QUARTER", .39], ["ONE", 1.24], ["FIVE", 5.52],
                        ["TEN", 10.52], ["TWENTY", 20.92], ["ONE HUNDRED", 100.29]];
    var result = "Invalid Input";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Insufficient Funds' if register's total is less than the expected change", function() {
    var cashInDrawer = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                        ["TWENTY", 0], ["ONE HUNDRED", 0]]
    var result =  "Insufficient Funds";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Insufficient Funds' even if the register's total is greater than the expected change", function(){
    var cashInDrawer = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00],
                        ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]]
    var result = "Insufficient Funds";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'Closed' if the register's total equals to the expected change", function() {
    var cashInDrawer = [["PENNY", 0.00], ["NICKEL", 0], ["DIME", 0], ["QUARTER", .50], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                          ["TWENTY", 0], ["ONE HUNDRED", 0]]
    var result =  "Closed";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns 'No Change' if the cash equals the price", function() {
    var price = 5.00;
    var cash = 5.00;
    var cashInDrawer = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                        ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]
    var result =  "No Change";

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("returns optimal change when denomination is available(EX:['FIVE', 5] for 5 instead of ['ONE', 5])", function() {
    var moneyValues = [.01, .05, .10, .25, 1, 5, 10, 20, 100];

    moneyValues.forEach(function(change, index) {
      var result = [[cashInDrawer[index][0], change]]
      expect(getChange(change, cashInDrawer)).toEqual(result);
    })
  })

  it("returns optimal change for all denominations combined", function() {
    var price = 363.59;
    var cash = 500.00;
    var result =  [["ONE HUNDRED", 100.00], ["TWENTY", 20.00], ["TEN", 10.00], ["FIVE", 5.00], ["ONE", 1.00], ["QUARTER", 0.25],
                   ["DIME", 0.10], ["NICKEL", .05], ["PENNY", 0.01]];

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

  it("moves onto the next applicable denomination when register runs out of that denomiation", function() {
    var price = 300.00;
    var cash = 500.00;
    var cashInDrawer = [["PENNY", .07], ["NICKEL", .15], ["DIME", .30], ["QUARTER", .50], ["ONE", 4.00], ["FIVE", 5.00],
                        ["TEN", 30.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]];
    var result =  [["ONE HUNDRED", 100.00], ["TWENTY", 60.00], ["TEN", 30.00], ["FIVE", 5.00], ["ONE", 4.00], ["QUARTER", 0.50],
                   ["DIME", 0.30], ["NICKEL", .15], ["PENNY", 0.05]];

    expect(checkCashRegister(price, cash, cashInDrawer)).toEqual(result);
  })

})
