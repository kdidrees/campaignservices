const express = require('express');
const router = express.Router();
const {createCampaign} = require("../controllers/createCampaign");
const upload = require("../middlewares/upload");


router.post('/create',upload.array('creatives'),createCampaign);


module.exports = router;