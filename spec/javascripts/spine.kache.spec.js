describe("Model.Kache", function(){
  var User;

  beforeEach(function(){
    User = Spine.Model.setup("User", ["name"]);
    Kache.enable();
  });

  it("should persist attributes", function(){
    User.extend(Spine.Model.Kache);
    User.create({name: "Jason"});
    User.create({name: "Lisa"});
    User.create({name: "Cameron"});
    User.create({name: "Sydney"});
    User.fetch();

    expect(User.first()).toBeTruthy();
    expect(User.first().name).toEqual("Jason");
  });

  it("should reset ID counter", function(){
    User.refresh([{name: "Jason", id: 1}]);
    expect(User.idCounter).toEqual(2);
  });

  it("should work with non string IDs", function(){
    User.refresh([{name: "Jason", id: "b"}]);
    expect(User.idCounter).toEqual(0);
  });

  it("should work with cIDs", function(){
    User.refresh([
      {name: "Jason", id: "c-1"},
      {name: "Jason", id: "c-3"},
      {name: "Jason", id: "c-2"}
    ]);
    expect(User.idCounter).toEqual(4);
  });

  it("should work with a blank refresh", function(){
    User.refresh([]);
    expect(User.idCounter).toEqual(0);
  });
});
