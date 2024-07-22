const campaignModel = require("../models/CampaignModel");

exports.getCampaignById = async (req, res) => {
  const { id } = req.params;

  try {
    const campaign = await campaignModel.findById(id);
    res.status(200).json({ msg: "campaign found", campaign });
  } catch (error) {
    console.log("error fetching campaign", error);
    res.status(500).json({ msg: "error fetching the campaign", error });
  }
};
