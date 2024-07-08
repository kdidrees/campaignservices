const campaignModel = require("../models/CampaignModel");

// create a new campaign

exports.createCampaign = async (req, res) => {
  try {
  

    console.log(req.body);
    console.log(req.files)


    // extract the data from request body
    const { general, pricings, targetings, advSetting } = req.body;

    // console.log(general?.creatives);

 // Parse general data fields
 const parsedGeneral = {
  ...JSON.parse(general),
  creatives: req.files.map((file, index) => ({
    file: file.path,
    targetingURL: req.body[`creativeTargetingURL[${index}]`]
  }))
};

// Create a new campaign instance with both data and file paths
const newCampaign = new campaignModel({
  general: parsedGeneral,
  pricings: pricings ? JSON.parse(pricings) : {},
  targetings: targetings ? JSON.parse(targetings) : {},
  advSetting: advSetting ? JSON.parse(advSetting) : {}
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
