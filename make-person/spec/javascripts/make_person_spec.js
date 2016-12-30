describe("Make A Person", function() {
  var person = new Person("Natasha Carlyon");

  it("can return the full name when given a string", function() {

    expect(person.getFullName()).toEqual("Natasha Carlyon");
  });

  it("can return the first name of a person", function() {
    expect(person.getFirstName()).toEqual("Natasha");
  });

  it("can return the last name of a person", function() {
    expect(person.getLastName()).toEqual("Carlyon");
  });

  it("can change the first name of a person", function() {
    person.setFirstName("Rob");
    expect(person.getFullName()).toEqual("Rob Carlyon");
  })

  it("returns the correct full name after changing the last name", function() {
    person.setFullName("Natasha Carlyon");
    person.setLastName("Kim");
    expect(person.getFullName()).toEqual("Natasha Kim");
  })

  it("returns the correct first/last/full name after changing the full name", function() {
    person.setFullName("Kit Kim");
    expect(person.getFirstName()).toEqual("Kit");
    expect(person.getLastName()).toEqual("Kim");
    expect(person.getFullName()).toEqual("Kit Kim");
  })

});
