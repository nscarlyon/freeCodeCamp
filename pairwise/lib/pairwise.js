var pairwise = function(array, sum) {
  return sumOfIndices(array, sum);
};

var sumOfIndices = function(array, sum) {
  return array.reduce(function(a, b, index) {
    var search = sum - b;

    if(array.indexOf(search) != -1 && array.indexOf(search) != index) {
      var total = index + array.indexOf(search);
      array.splice(index, 1, NaN);
      array.splice(array.indexOf(search), 1, NaN);
      return a + total;
    }
    return a;
  }, 0);
}
