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
  const newDriver = [...drivers].sort(function (rev1, rev2) {
    let returnUni = rev1.revenue - rev2.revenue;
    if (returnUni < 0) {

      return -1;
    } if (returnUni > 0){
      return 1;
    }
})
return newDriver;
};
