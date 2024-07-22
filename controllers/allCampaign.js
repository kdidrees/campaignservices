const campaignModel = require("../models/CampaignModel");

exports.allCampaign = async (req, res) => {
  try {
    const campaigns = await campaignModel.find();

    res.status(200).json({ msg: "campaigns found", campaigns });
  } catch (error) {
    console.log("error fetching campaigns", error);
    res.status(500).json({ msg: "failed to fech campaigns", error: error.msg });
  }
};
