// export default function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Radius of the earth in km
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const d = R * c * 1000; // Distance in meters
//     return d;
// }

// function deg2rad(deg) {
//     return deg * (Math.PI / 180);
// }


export default function calculateDistance(lat1, lon1, lat2, lon2) {
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