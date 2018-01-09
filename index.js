// Code your solution in this file!
function logDriverNames (drivers) {

drivers.forEach(function (el, i, arr) {

    console.log(el.name);
  })
};

function logDriversByHometown (drivers, location) {

  drivers.forEach(function (el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  })
};

function driversByRevenue(drivers) {
  const newArray = [...drivers].sort(function (rev1, rev2) {
    let returnUni = rev1.revenue - rev2.revenue;
    if (returnUni < 0) {

      return -1;
    } if (returnUni > 0){
      return 1;
    }
})
return newArray;
};

function driversByName(drivers) {
  const newArray = [...drivers].sort(function (name1, name2) {
    return name1.name.localeCompare(name2.name)
  })
  //returns a new array of `driver` objects sorted by their `name` attribute from A to Z
  return newArray;
};

/*const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];*/
function totalRevenue(drivers) {
  let totalRevenue = 0;
  drivers.forEach(function (driver){
    totalRevenue += driver.revenue;
    //returns sum of Revenue.
  });

  return totalRevenue;
};
