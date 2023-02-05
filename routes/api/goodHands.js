const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");
const { Hands } = require("../../models/goodHands");

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        
        // create instance of sell
        let goodHands = new Hands({
            title: req.body.title,
            photoUrl: result.secure_url,
            breed: req.body.breed,
            place: req.body.place,
            sex: req.body.sex,
            cloudinary_id: result.public_id,
        });
        // save sell
        await goodHands.save();
        res.json(goodHands);
     } catch (err) {
        console.log(err);
    }
})

    router.get("/", async (req, res) => {
  try {
    const goodHandAll = await Hands.find();
    res.json(goodHandAll);
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;