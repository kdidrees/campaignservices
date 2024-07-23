const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  general: {
    adFormat: { type: String },
    feed: { type: String },
    subFeedMainstream:{type:String},
    afterVerification: { type: String },
    scheduledDateTime:{type:Date},
    imageSize: { type: String },
    creatives: [
      {
        image: { type: String }, 
        targetingURL: { type: String },
      },
    ],
    campaignName: { type: String },
    destinationURL: { type: String },
  },
  pricings: {
    pricingModel: { type: String },
    biddingValue: { type: Number },
    campaignBudget: { type: Number },
    dailyBudget: { type: Number },
  },
  targetings: {
    geo: { type: [String] },
    device: { type: [String] },
    os: { type: [String] },
    browser: { type: [String] },
    connectionType: { type: [String] },
    language: { type: [String] },
    ipRange: { type: [String] },
  },
  advSettings: {
    proxyFilter: { type: String },
    buyingType: { type: String }, 
    frequenctImpression: { type: Number },
    cappingImpression: { type: Number },
    frequencyClick: { type: Number },
    cappingClick: { type: Number },
  },
});

module.exports = mongoose.model("Campaigns", campaignSchema);
