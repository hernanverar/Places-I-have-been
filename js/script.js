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
  this.cityWeather = cityWeather
}

City.prototype.cityName = function() {
  return this.cityName + " " + this.cityThingsToDo;
};

function listCitys(placesToVisitToDisplay) {
  let citysDiv = document.querySelector("ul#cityName");

  Object.keys(placesToVisitToDisplay.citys).forEach(function(key){
    const city = placesToVisitToDisplay.findCity(key);

    const li = document.creteElement("li");
    li.append(city.cityName());
    li,setAttribute("id", city.id);
    cityList.append(li);
  });
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCityName = document.querySelector("input#new-cityName").value;
  const inputtedCiyThinsToDo = document.querySelector("input#new-cityThingsToDo").value;
  const inputtedCityWeather = document.querySelector("input#new-cityWeather").value;
  let newContact = new City(inputtedCityName, inputtedCityThingsToDo, inputtedCityWeather);
  addressBook.addCity(newCity);
  listCitys(PlacesToVisit); 
}

window.addEventListener("load", function (){
  document.querySelector("#new-city").addEventListener("click", handleFormSubmission);
});