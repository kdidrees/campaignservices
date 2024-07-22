const express = require('express');
const router = express.Router();
const {createCampaign} = require("../controllers/createCampaign");
const {allCampaign} = require("../controllers/allCampaign");
const upload = require("../middlewares/upload");

// route to create campaign
router.post('/create',upload.array('creatives'),createCampaign);

// route to fetch all campaigns data 
router.get('/allcampaigns',allCampaign)

module.exports = router;
