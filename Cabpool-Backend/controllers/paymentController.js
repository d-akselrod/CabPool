'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref = firestore.collection('rides')


const calculatePayments = async (req, res, _) => {

    // Keys of req.body.riders:
    // riderID: string
    // start: number
    // end: number

    const { riders } = req.body;

    // Sort the riders by their start position
    riders.sort((a, b) => a.start - b.start);

    // Payment is calculated for each rider
    const payments = riders.map((rider, index) => {
        let payment = 0;
        let distance = 0;
        let ridersSharingDistance = 1;
        let ridersSharingDistanceIndex = index;
        let ridersSharingDistanceEnd = index;
        let ridersSharingDistanceStart = index;

        // Payment is calculated for the distance traveled by this rider
        // before the first rider who started after this rider
        while (ridersSharingDistanceIndex > 0) {
            if (riders[ridersSharingDistanceIndex - 1].start < rider.start) {
                break;
            }
            ridersSharingDistanceIndex--;
            ridersSharingDistance++;
        }
        distance = rider.start - riders[ridersSharingDistanceIndex].start;
        payment += distance / ridersSharingDistance;

        // Payment is calculated for the distance traveled by this rider
        // after the last rider who ended before this rider
        while (ridersSharingDistanceEnd < riders.length - 1) {
            if (riders[ridersSharingDistanceEnd + 1].end > rider.end) {
                break;
            }
            ridersSharingDistanceEnd++;
            ridersSharingDistance++;
        }
        distance = riders[ridersSharingDistanceEnd].end - rider.end;
        payment += distance / ridersSharingDistance;

        // Payment is calculated for the distance traveled by this rider
        // between the first rider who started after this rider and the
        // last rider who ended before this rider
        while (ridersSharingDistanceStart < ridersSharingDistanceEnd) {
            if (riders[ridersSharingDistanceStart + 1].start > rider.start) {
                break;
            }
            ridersSharingDistanceStart++;
        }
        distance = riders[ridersSharingDistanceEnd].start - riders[ridersSharingDistanceStart].start;
        payment += distance / ridersSharingDistance;

        return {
            riderID: rider.riderID,
            payment
        };
    }
    );

    // Return the payments
    res.status(200).send(payments);
};



module.exports = {
    calculatePayments
}