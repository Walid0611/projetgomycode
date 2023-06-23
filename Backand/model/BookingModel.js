const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  bookedTimeSlots: {
   type: String 
  },
  image: String,
  totalHours: {
    type: Number,
  }
});

const Booking = mongoose.model('BookingModel', bookingSchema);

const createBooking = async () => {
  try {
    const newBooking = new Booking({
      model: 'Bmw',
      bookedTimeSlots: {
        from: '10:00 AM',
        to: '12:00 PM'
      },
      totalHours: 2
    });

    const savedBooking = await newBooking.save();
    console.log('Booking saved successfully');
    console.log(savedBooking);
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = { Booking, createBooking };
