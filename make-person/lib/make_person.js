Person = function(firstAndLast) {
  var fullName = firstAndLast

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };

  this.getLastName = function() {
    return fullName.split(' ')[1];
  };

  this.setFirstName = function(firstName) {
    fullName = firstName + " " + this.getLastName();
  };

  this.setLastName = function(lastName) {
    fullName = this.getFirstName() + " " + lastName;
  };

  this.setFullName = function(name) {
    fullName = name;
  };

}
