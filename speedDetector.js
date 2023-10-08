// function to calculate demerits points based on speed
function calculateDemeritPoints(speed) {
    //set speed limit
    const speedLimit= 70;
    //set demerit points per km
    const kmPerDemeritPoint= 5;
    //check if speed is okay
    if (speed <= speedLimit) {
        return 'ok';
    }
    //calculate points based on speed
    const points = Math.floor((speed-speedLimit)/ kmPerDemeritPoint);

    //check if license should be suspended
    if (points >= 12) {
        return "License suspended"; // return license suspended if points are too high
    }

    // Return points
    return "points:" + points;
}
 // set speed
 const speed= 80;
 //calculate points
 const result = calculateDemeritPoints(speed);
 //print result 
 console.log (result);