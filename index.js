const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(drivers.length-2)
}

const selectingDrivers = [
   returnFirstTwoDrivers,
   returnLastTwoDrivers
]

function createFareMultiplier(mul) {
   return function(fare) {
      return mul*fare
   }
}

function fareDoubler(fare) {
   return 2*fare
}

function fareTripler(fare) {
   return 3*fare
}

function selectDifferentDrivers(arrayOfDrivers, func) {
   return func(arrayOfDrivers)
}
