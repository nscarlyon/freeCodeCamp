var moneyDenominations = new Map([["PENNY", .01], ["NICKEL", .05], ["DIME", .10], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5],
                                  ["TWENTY", 20], ["FIFTY", 50], ["ONE HUNDRED", 100]])


checkCashRegister = function(price, cash, cid) {
  var changeLeft = cash - price;

  return validInput(arguments) ? returnChange(changeLeft, cid) : "Invalid Input";
};

returnChange = function(changeLeft, cid) {
  if(noChange(changeLeft)) return "No Change";
  if(shouldClose(changeLeft, cid)) return "Closed";
  if(lackingFunds(changeLeft, cid)) return "Insufficient Funds";
  return getChange(changeLeft, cid);
};

noChange = function(changeLeft) {
  return changeLeft == 0;
};

shouldClose = function(changeLeft, cid) {
  return drawerTotal(cid) == changeLeft;
};

lackingFunds = function(changeLeft, cid) {
  return drawerTotal(cid) < changeLeft;
};

drawerTotal = function(cid) {
  return cid.reduce(function(total, next) {return total + next[1];}, 0);
};

validInput = function(arguments) {
  if(containsArray(arguments)) {
    return ((arguments.length == 3) && (arguments[2].every(validDenomination)) == true  && (arguments[0] <= arguments[1])
            && (arguments[0] > 0));
  } else return false
};

containsArray = function(arguments) {
  return Array.isArray(arguments[2]) == true;
};

validDenomination = function(element, index) {
  return Math.round(element[1] % moneyDenominations[element[0]]) == 0;
};

getChange = function(changeLeft, cid) {
  var changeArray = [];

  var i = cid.length - 1;
  moneyDenominations.forEach(denominationValue, denominationName) {
    
  }
  for(i; i > -1; i--) {
    var denominationValue = moneyDenominations[cid[i][0]];
    var availableCash = cid[i][1];
    var denominationChange = 0;

    if(addToChangeArray(changeLeft, denominationValue)) {
        while(getChangeFromRegister(availableCash, changeLeft, denominationValue)) {
          availableCash -= denominationValue;
          changeLeft = Math.round((changeLeft - denominationValue) * 100)/100;
          denominationChange = Math.round((denominationChange + denominationValue) * 100)/100;
        }
        changeArray.push([cid[i][0], denominationChange]);
    }
  }

  return changeLeft > 0 ? "Insufficient Funds" : changeArray;
};

addToChangeArray = function(changeLeft, denominationValue) {
  return changeLeft >= denominationValue;
};

getChangeFromRegister = function(availableCash, changeLeft, denominationValue) {
  return availableCash > 0 && changeLeft >= denominationValue;
};
