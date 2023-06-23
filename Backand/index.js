const express = require('express');
const app = express();
const cors =require('cors');
const port =3006
const connectdb =require('./config/connecteddb')
const userRoute = require('./routes/routeuser');
require ('dotenv').config()
const BookingModel = require ('./model/BookingModel');
const mongoose = require('mongoose');
const Memo = mongoose.model('Memo', {
  model: String,
  bookedTimeSLots: Number,
  totalHours:Number,
  image:String
});

app.use(cors())
app.use(express.json())

//connection
connectdb()

//path d'auth
app.use('/auth',userRoute)

//partie admin

//partie user
//app.use('/usermemo',MemoRoute)
app.post('/memos', (req, res) => {
  const memo = new Memo(req.body);
  memo.save()
    .then(() => {
      res.send('Booking created successfully');
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send('Error creating user');
    });
});

// Get all users
app.get('/memos', (req, res) => {
  Memo.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(400).send('Error retrieving users');
    });
});



// Update a user
// app.put('/users/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send('User not found');
//       }
//       res.send('User updated successfully');
//     })
//     .catch((error) => {
//       res.status(400).send('Error updating user');
//     });
// });

// Delete a user
app.delete('/memos/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.send('User deleted successfully');
    })
    .catch((error) => {
      res.status(400).send('Error deleting user');
    });
});


app.listen(port,err=>{
    err?console.log(err):console.log(`you are connected to the port: ${port}`)
})


