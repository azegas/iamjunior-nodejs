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
            message: 'All fields are required: businessId, date, time, userEmail, userName, and status.'
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
