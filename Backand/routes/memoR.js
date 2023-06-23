const express = require('express');
const { body, validationResult } = require('express-validator');
const CarControllers = require('../controller/CarController') 

const MemoSchema = require('../model/memo');

const MemoRoute = express.Router();

// Route to get all memos
MemoRoute.get('/getmemo', async (req, res) => {
  try {
    const memos = await MemoSchema.find();
    res.status(200).json(memos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// http://localhost:3006/memos
MemoRoute.post('/CarController.addCars',
 
);

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newMemo = new MemoSchema(req.body);
      await newMemo.save();

      res.status(200).json({ msg: 'New memo added', newMemo });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
;

// Route to update a memo
MemoRoute.put('/updatememo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMemo = await MemoSchema.findByIdAndUpdate(id, { $set: { ...req.body } });

    if (!updatedMemo) {
      return res.status(404).json({ error: 'Memo not found' });
    }

    res.status(200).json({ msg: 'Memo updated', updatedMemo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a memo
MemoRoute.delete('/deletememo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMemo = await MemoSchema.findByIdAndDelete(id);

    if (!deletedMemo) {
      return res.status(404).json({ error: 'Memo not found' });
    }

    res.status(200).json({ msg: 'Memo deleted', deletedMemo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a unique memo
MemoRoute.get('/getunique/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const uniqueMemo = await MemoSchema.findById(id);

    if (!uniqueMemo) {
      return res.status(404).json({ error: 'Memo not found' });
    }

    res.status(200).json({ msg: 'Unique memo found', uniqueMemo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//module.exports = MemoRoute;
