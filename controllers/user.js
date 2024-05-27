import calculateDistance from '../utils/getDistance.js';
import User from '../models/user.js';
export default async function userController(req, res, next){
    let peopleLocations = [];
    await User.find({}).exec().then((data) => {
        peopleLocations = data;
        console.log("peopleLocations", peopleLocations);
    });
    try {
        const newLocation = req.body.location;
        const userWallet = req.body.walletAddr;

        console.log("------------------------>", newLocation, userWallet);
        if (!newLocation || !newLocation.lat || !newLocation.lng) {
            return res.status(400).json({ error: 'Invalid location data' });
        }

        let count = 0;
        const peopleInDistance = [];
        peopleInDistance.push(newLocation);
        for (const item of peopleLocations) {
            const distance = calculateDistance(parseFloat(newLocation.lat), parseFloat(newLocation.lng), parseFloat(item.location.lat), parseFloat(item.location.lng));
            console.log("distance", distance);
            if (distance <= 402) {
                peopleInDistance.push({"lat":item.location.lat, "lng":item.location.lng});
                count++;
            }
        }
        await User.find({
            'userId': userWallet
          }).exec().then(async(data) => {
            console.log("UserAddr", data);
            if(data.length === 0){
                try {
                    const newUser = new User({
                        userId: req.body.walletAddr,
                        location: req.body.location,
                        accuracy: req.body.accuracy,
                    });
            
                    await newUser.save();
                } catch (error) {
                    console.error(error);
                }

            }else {
                await User.updateOne(
                    {userId: userWallet},
                    {$set: {
                                location: req.body.location,
                                accuracy: req.body.accuracy,
                            }
                    }
                ).exec();
            }
        });
        return res.json(peopleInDistance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    next();
}
