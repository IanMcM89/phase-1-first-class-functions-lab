// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
    const newDriverArray = drivers.slice(0,2);
    return newDriverArray;
}

const returnLastTwoDrivers = function(drivers) {
    const newDriverArray = drivers.slice(2,4);
    return newDriverArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    const fareMultiplier = fare => integer * fare;
    return fareMultiplier;
}

// createFareMultiplier(4)(5); => 20

const fareDoubler = createFareMultiplier(2);

// fareDoubler(10); => 20

const fareTripler = createFareMultiplier(3);

// fareTripler(12); => 36

function selectDifferentDrivers(drivers, returnDriverFunction) {
    if (returnDriverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (returnDriverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}

// selectDifferentDrivers(drivers, returnLastTwoDrivers); => [ 'Freddy', 'Claudia' ]