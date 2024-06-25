const campaignModel = require('../models/CampaignModel');

// create a new campaign 

exports.createCampaign = async(req,res)=>{
    try {
         
        const campaign =  new campaignModel(req.body);
        await campaign.save();
        res.status(201).send({message:"campaign created successfully", campaign})

    } catch (error) {   
         res.status(400).send({error:'failed to create campaign',message:error.message})        
    }
};

