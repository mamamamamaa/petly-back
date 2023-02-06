const { Notice } = require("../../models/notice");
const cloudinary = require("../../utils/cloudinary");
const { addNoticeSellSchema } = require("../../schemas/noticesSell");
const { addNoticeLostFoundSchema } = require("../../schemas/noticesSell");
const {addNoticeGoodHandsSchema} = require("../../schemas/noticesSell");



const validateBody = (type, data) => {
  switch(type){
    case "lost/found":
      return addNoticeSellSchema.validate(data);
    case "good-hands":
      return addNoticeLostFoundSchema.validate(data);
    case "sell":
      return addNoticeGoodHandsSchema.validate(data);
  }
}
  
const addNotice = async (req, res) => {
    const { type } = (req.body);

    
 
    if (! (type)) {
         return res.status(400).json({ status: validateBody.error });
    }
    
  const image = await cloudinary.uploader.upload(req.file.path);

  const photoUrl = image.secure_url;
  const { _id: owner } = req.user;
    const result = await Notice.create({ ...req.body, owner, photoUrl });


  res.status(201).json(result);
}

module.exports = {addNotice};