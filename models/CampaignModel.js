const express = require("express");
const { default: mongoose } = require("mongoose");

const campaignSchema = new mongoose.Schema({
  general: {
    adFormat: String,
    feed: String,
    afterVerification: String,
    imageSize: String,
    creatives: [String], // assuming creatives are stored as an array of strings
  },
  pricing: {
    pricingModel: String,
    biddingValue: Number,
    campaignBudget: Number,
    dailyBudget: Number,
    pricingModel: String,
  },
  targetings: {
    geo: [String],
    devices: [String],
    operatingSystem: [String],
    browser: [String],
    connectionType: [String],
    language: [String],
    iprange: String,
  },
  advSetting: {
    frequencyImpression: Number,
    cappingImpression: String,
    nocappingImpression: { type: Boolean, default: false },
    frequencyClick: Number,
    cappingClick: String,
    nocappingClick: { type: Boolean, default: false },
    proxyFilter: { type: Boolean, default: false },
    campaignSchedule: [String],
    tracking: String,
  },
});

const campaignModel = mongoose.model("campaigns", campaignSchema);

module.exports = campaignModel;
