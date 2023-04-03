function PlacesToVisit () {
  this.citys = {};
}

PlacesToVisit.prototype.addCity = function (city) {
  this.citys[city.cityName] = city;
}

function City (cityName, cityThigsToDo,) {
  this.cityName = cityName;
  this.cityThingsToDo = cityThigsToDo;
}

City.prototype.cityName = function() {
  return this.cityName + " " + this.cityThingsToDo;
};