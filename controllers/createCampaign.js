const campaignModel = require("../models/CampaignModel");

// create a new campaign

exports.createCampaign = async (req, res) => {
  try {
    // extract the data from request body
    const { general, pricings, targetings, advSettings } = req.body;

    // process file uploads if there are any

    console.log(general?.creatives);

    let images = [];
    if (general.creatives && general.creatives.length > 0) {
      images = general.creatives.map((creative) => creative.file.path);
    }

    // create a new campaign instance with both data and file paths
    const newCampaign = new campaignModel({
      general: {
        ...general,
        creatives: images, // store only paths
      },
      pricings,
      targetings,
      advSettings,
    });

    // save the campaign to the database
    const campaign = await newCampaign.save();

    // Respond with a success message and the saved campaign object
    res
      .status(201)
      .json({ message: "Campaign created successfully", campaign });
  } catch (error) {
    // Handle errors if saving fails
    console.error("Error creating campaign:", error);
    res
      .status(400)
      .json({ error: "Failed to create campaign", message: error.message });
  }
};
