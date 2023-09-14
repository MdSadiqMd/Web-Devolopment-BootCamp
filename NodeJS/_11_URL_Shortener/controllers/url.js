const {shortId}=require("shortid")
const url=require("../models/url");
const shortid = require("shortid");
async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url){
        return res.status(400).json({error:"url is required"})
    }
    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
    });
    return res.json({id:shortId});
}
module.exports={handleGenerateNewShortURL,};