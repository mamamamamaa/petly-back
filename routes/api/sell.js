const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");
const { Sell } = require("../../models/sell");
const ctrl = require("../../controllers/sell");

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        
        // create instance of sell
        let sell = new Sell({
            title: req.body.title,
            photoUrl: result.secure_url,
            name: req.body.name,
            breed: req.body.breed,
            place: req.body.place,
            price: req.body.price,
            comments: req.body.comments,
            cloudinary_id: result.public_id,
        });
        // save sell
        await sell.save();
        res.json(sell);
     } catch (err) {
        console.log(err);
    }
})

router.get("/", ctrl.sellAll);

module.exports = router;