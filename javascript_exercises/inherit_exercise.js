Function.prototype.inherits1 = function(Superclass) {
  function Surrogate() {}
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


Function.prototype.inherits2 = function(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};
