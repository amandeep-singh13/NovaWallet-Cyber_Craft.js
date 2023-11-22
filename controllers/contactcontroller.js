const contactModel = require("../models/contactModel");

exports.contactcontroller = async (req, res) => {
  try {
    console.log(req.body);
    const {name,email,subject,message}=req.body; 
    const response=await contactModel.create({name,email,subject,message});
    // const newcontact = new contactModel(req.body);
    // const response = await newcontact.save({ timeout: 15000 }); // Increase timeout to 15 seconds

    res.status(200).json({
      success: true,
      data: response,
      message: "Message has been sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: error.message,
      error: error,
    });
  }
};
