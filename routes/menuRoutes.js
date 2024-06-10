const express = require('express');
const router=express.Router();
const Menu=require("../models/menu");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Menu(data);
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/", async (req, res) =>{
    try {
      const response = await Menu.find();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/:tasteType", async (req, res) =>{
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == "sour" || tasteType == "spicy" || tasteType == "sweet") {
          const response = await Person.find({ taste: tasteType });
          res.status(200).json(response);
        } else {
          res.status(404).json({ error: "Invalid tasteType" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

router.get("/:ingredientsType", async (req, res) =>{
    try {
        const ingredientsType = req.params.ingredientsType;
        if (ingredientsType == "sauce" || ingredientsType == "spices" || ingredientsType == "chicken wings") {
          const response = await Person.find({ taste: ingredientsType });
          res.status(200).json(response);
        } else {
          res.status(404).json({ error: "Invalid ingredientsType" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

module.exports=router;