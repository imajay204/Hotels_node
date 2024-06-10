const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // newPerson.save((error,savedPerson) => {
  //     if(error){
  //         console.log('Error saving person',error);
  //         res.status(500).json({error:'Internal Server Error'});
  //     }
  //     else{
  //         console.log('data saved successfully');
  //         res.status(200).json(savedPerson);
  //     }
  // });
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manger") {
      const response = await Person.find({ work: workType });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid WorkType" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const data = req.params.id;
      personData=req.body;
      const response = await Person.findByIdAndUpdate(data,personData,{
        new: true,
        runValidators: true,
      });
      if(!response){
        res.status(404).json({ error: "Invalid Id" });
      }
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const data = req.params.id;
      const response = await Person.findByIdAndDelete(data);
      if(!response){
        res.status(404).json({ error: "Invalid Id" });
      }
      res.status(200).json(response);
      console .log("person deleted successfully")
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});





module.exports = router;
