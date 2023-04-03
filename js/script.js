function PlacesToVisit () {
  this.citys = {};
}

PlacesToVisit.prototype.addCity = function (city) {
  this.citys[city.cityName] = city;
};

PlacesToVisit.prototype.findCity = function (id) {
  if (this.citys[id] !== undefined) {
  return this.citys[id];
  }
  return false;
};


function City (cityName, cityThigsToDo,) {
  this.cityName = cityName;
  this.cityThingsToDo = cityThigsToDo;
}

City.prototype.cityName = function() {
  return this.cityName + " " + this.cityThingsToDo;
};

function listCitys(placesToVisitToDisplay) {
  let citysDiv = document.querySelector("div#cityName");
  citysDiv.innertext = null;

  const ul = document.createElement('ul');
  Object.keys(placesToVisitToDisplay.citys).forEach(function(key){
    const city = placesToVisitToDisplay.findCity(key);
    const li = document.creteElement("li");
    li.append(city.cityName());
    li,setAttribute("id", city.id);
    ul.append(li);
  });
  citysDiv.append(ul);
}