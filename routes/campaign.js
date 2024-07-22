const express = require('express');
const router = express.Router();
const {createCampaign} = require("../controllers/createCampaign");
const {allCampaign} = require("../controllers/allCampaign");
const {getCampaignById} = require("../controllers/getCampaignById");
const upload = require("../middlewares/upload");

// route to create campaign
router.post('/create',upload.array('creatives'),createCampaign);

// route to fetch all campaigns data 
router.get('/allcampaigns',allCampaign)

// route to fetch campaign data by id 
router.get('/campaign/:id',getCampaignById)

module.exports = router;
