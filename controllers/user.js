import getDistanceFromLatLonInMeters from '../utils/getDistance.js';
import User from '../models/user.js';
export default function UserController(req, res, next){
    let peopleLocations = [];
    User.find({}).exec().then((data) => {
        console.log(data);
        peopleLocations = data;
    });
    try {
        const newLocation = req.body.location;
        console.log("------------------------>", newLocation);
        if (!newLocation || !newLocation.lat || !newLocation.lng) {
            return res.status(400).json({ error: 'Invalid location data' });
        }

        let count = 0;
        for (const location of peopleLocations) {
            const distance = getDistanceFromLatLonInMeters(parseFloat(newLocation.lat), parseFloat(newLocation.lng), parseFloat(location.lat), parseFloat(location.lng));
            if (distance <= 402) {
                count++;
            }
        }

        res.json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    next();
}