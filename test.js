// function calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLon = (lon2 - lon1) * Math.PI / 180;
//     const a = 
//         Math.sin(dLat/2) * Math.sin(dLat/2) +
//         Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//         Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
// }

// const location1 = {
//     "lat": 35.6727748,
//     "lng": 139.8174521
// };

// const location2 = {
//     "lat": 35.6721000,
//     "lng": 139.8180000
// };

// const distance = calculateDistance(location1.lat, location1.lng, location2.lat, location2.lng);
// console.log(distance);

// // Assuming the distance is calculated in kilometers
// const distanceInKilometers = calculateDistance(location1.lat, location1.lng, location2.lat, location2.lng);

// // Convert kilometers to meters
// const distanceInMeters = distanceInKilometers * 1000;

// console.log(distanceInMeters);


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKilometers = R * c; // Distance in kilometers
    const distanceInMeters = distanceInKilometers * 1000;

    console.log(distanceInMeters);

    return distanceInMeters;
}


const location1 = {
    "lat": 35.6727748,
    "lng": 139.8174521
};

const location2 = {
    "lat": 35.6721000,
    "lng": 139.8180000
};

const distance = calculateDistance(location1.lat, location1.lng, location2.lat, location2.lng);
console.log(distance);