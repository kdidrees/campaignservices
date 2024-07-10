const campaignModel = require("../models/CampaignModel");
const moment = require("moment");

exports.createCampaign = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.files);

    const scheduledDateTimeString = "12/07/2024, 12:20:00 AM";


    // Extract the data from request body
    const { general, pricings, targetings, advSettings } = req.body;
    
    
      // Parse the general field if it's a string
      if (typeof general === 'string') {
      var  general2 = JSON.parse(general);
    }

    console.log(general2 , "genreral222222222222222")
    // Parse general data fields
    const parsedGeneral = {
      ...general2,
      creatives: req.files.map((file, index) => ({
        image: file.filename,  // Save only the filename
        targetingURL: req.body[`creativeTargetingURL[${index}]`]
      })),
      scheduledDateTime: moment(general2.scheduledDateTime,"DD/MM/YYYY, hh:mm:ss A").toDate()
    };

    // console.log(parsedGeneral , "Parsssss")
    
    // console.log("Scheduled Date Time:", ((parsedGeneral?.scheduledDateTime)));


    // Create a new campaign instance with both data and file paths
    const newCampaign = new campaignModel({
      general: parsedGeneral,
      pricings: pricings ? JSON.parse(pricings) : {},
      targetings: targetings ? JSON.parse(targetings) : {},
      advSettings: advSettings ? JSON.parse(advSettings) : {}
    });

    // Save the campaign to the database
    const campaign = await newCampaign.save();

    // Respond with a success message and the saved campaign object
    res.status(201).json({ message: "Campaign created successfully", campaign });
  } catch (error) {
    // Handle errors if saving fails
    console.error("Error creating campaign:", error);
    res.status(400).json({ error: "Failed to create campaign", message: error.message });
  }
};
