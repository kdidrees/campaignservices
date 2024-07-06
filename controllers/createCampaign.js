const campaignModel = require("../models/CampaignModel");

// create a new campaign

exports.createCampaign = async (req, res) => {
  try {
    const {general,pricings,targetings,advSettings} = req.body;

   

    // create a new campaign instance using the model request body
    const campaign = new campaignModel({
        general,
        pricings,
        targetings,
        advSettings
    });

    // save the campaign to the database
    await campaign.save();

    // Respond with a success message and the saved campaign object
    res
      .status(201)
      .send({ message: "Campaign created successfully", campaign });
  } catch (error) {
    // Handle errors if saving fails
    res
      .status(400)
      .send({ error: "Failed to create campaign", message: error.message });
  }
};
