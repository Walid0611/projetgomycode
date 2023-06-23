
const bookingSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    car: {
        type: String,
       
        required: true
    },
   
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('bookings',bookingSchema);