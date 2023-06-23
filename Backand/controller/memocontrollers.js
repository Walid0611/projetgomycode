const Booking = require('../models/BookingModel');

 
exports.addBooking = async (req, res) => {
    try {
      const { Model, bookedTimeSLots, image, totalHours } = req.body;
      const newBooking = new bookingSchema({
        Model,
        bookedTimeSLots : new Date(`${date}`)   ,
        image,
        totalHours
      });
      await newBooking.save();
      res.status(200).json({ msg: 'Success booking', newBooking });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: ' error in the booking' });
    }
  };
  
 

 
  exports.deleteBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const booking = await bookingSchema.findByIdAndDelete(id);
      if (!booking) {
        res.status(404).json({ msg: "Booking does not exist" });
        return;
      }
      res.status(200).json({ msg: 'Booking successfully deleted' });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: ' error is deleted at  the booking ' });
    }
  }
  
  


exports.updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { Model, bookedTimeSLots, image, totalHours } = req.body;

    // Find and update the booking by ID
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      id,
      { Model, totalHours, bookedTimeSLots: new bookedTimeSLots(`${date}`), totalHours },
      { new: true }
    );

    // If the booking is not found, return an error
    if (!updatedBooking) {
      res.status(404).json({ msg: "Booking not found" });
      return;
    }

    
    res.status(200).json({ msg: 'Booking updated successfully', updatedBooking });
  } catch (err) {
    console.err(err);
   
    res.status(500).json({ msg: 'An error occurred while updating the booking' });
  }
}

  




exports.getAllBookings = async (req, res) => {
    try {
      
      const allBookings = await bookingSchema.find();
  
      res.status(200).json({ msg: 'All bookings', allBookings });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while getting the bookings' });
    }
  }
  



exports.getBookingById = async (req, res) => {
    try {
      const { id } = req.params;
  
      
      const booking = await bookingSchema.findById(id);
  
      if (!booking) {
        res.status(404).json({ msg: 'Booking not found' });
        return;
      }
  
      
      res.status(200).json({ msg: 'Booking found', booking });
    } catch (error) {
      console.err(err);
      
      res.status(500).json({ msg: ' error with the booking' });
    }
  }