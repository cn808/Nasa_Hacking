const showSideBar = (locations, i) => {
  let closebtn = document.querySelector("#closebtn");
  let sideNav = document.querySelector("#sidebar");

  closebtn.addEventListener("click", function(){
    document.getElementById("mySidenav").style.width = "0";
  });

  // upon clicking on the markers
  sideNav.style.width = "250px";

  //append the beach name
  beachName =  document.createElement("h2");
  beachName.innerHTML = locations[i][0];
  sideNav.appendChild(beachName);

  //append the links

  //weather
  var weather = document.createElement('h3');
  weather.innerHTML = 'Weather';
  sideNav.appendChild(weather);

  //hazards
  var hazards = document.createElement('h3');
  hazards.innerHTML = 'Hazards'
  sideNav.appendChild(hazards);

  //Ocean
  var ocean = document.createElement('h3');
  ocean.innerHTML = 'Ocean'
  sideNav.appendChild(ocean);
}

