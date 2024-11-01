const { bookings } = require('../../data/data');

/*
http://localhost:3000/api/bookings

{
    "businessId": "1",
    "date": "2023-01-01",
    "time": "10:00",
    "userEmail": "user@example.com",
    "userName": "User Name",
    "status": "pending"
}
*/

function postBooking(req, res) {

    const { businessId, date, time, userEmail, userName, status } = req.body;

    // Check if all required fields are provided
    if (!businessId || !date || !time || !userEmail || !userName || !status) {
        return res.status(400).json({
            success: false,
            message: 'Required fields: businessId, date, time, userEmail, userName, and status.'
        });
    }

    // Check if fields are of the correct type
    if (typeof businessId !== 'string' || typeof date !== 'string' || typeof time !== 'string' || typeof userEmail !== 'string' || typeof userName !== 'string' || typeof status !== 'string' || !userEmail.includes('@')) {
        return res.status(400).json({
            success: false,
            message: 'businessId, date, time, userEmail, userName, and status should be strings, and userEmail should contain @.'
        });
    }

    bookings.push({
        id: bookings.length + 1,
        businessId: req.body.businessId,
        date: req.body.date,
        time: req.body.time,
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        status: req.body.status
    });
    
    res.json({
        success: true,
        message: 'Booking created successfully',
        booking: bookings[bookings.length - 1]
    });
}

module.exports = {
    postBooking
}
