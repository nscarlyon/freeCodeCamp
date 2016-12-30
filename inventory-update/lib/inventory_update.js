var updateInventory = function(curInv, newInv) {
  return updatedInventory(curInv, newInv);
}

var updatedInventory = function(curInv, newInv) {
  newInv.forEach(function(newItem) {
    var flag = 0;
    curInv.forEach(function(curItem) {
      if(newItem[1] == curItem[1]) {
        curItem[0]+=newItem[0];
        flag = 1;
      };
    });
    if(flag == 0) {curInv.push(newItem);}
  });

  return alphabetizeInventory(curInv);
}

var alphabetizeInventory = function(updatedInventory) {
  return updatedInventory.sort(function(a, b) {
    return a[1] > b[1];
  })
}
