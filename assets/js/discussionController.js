const Discussion=require('.../models/discussion');

exports.getDiscussionSummaries=async(req,res)=>{
    try{
        const discussions = await discussion.find({},'summary');
        res.status(200).json({discussionTopics: discussions});
    }catch(err){
        res.status(500).json({ 
            error:'Failed to fetch discussion summaries'
        });
    }
};

exports.getDiscussionDetails=async(req,res)=>{
    try{
        const discussions=await Discussion.find({});
        res.status(200).json({discussionTopics:discussions});
    }catch(err){
        res.status(500).json({error: 'Failed to fetch discussion details'});
    }
};