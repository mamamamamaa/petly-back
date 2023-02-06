const router = require("express").Router();
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");
const { LostFound } = require("../../models/lostFound");
const ctrl = require("../../controllers/lostFound");

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        
        // create instance of sell
        let lostFound= new LostFound({
            title: req.body.title,
            photoUrl: result.secure_url,
            name: req.body.name,
            breed: req.body.breed,
            place: req.body.place,
            dateOfBirth: req.body.dateOfBirth,
            comments: req.body.comments,
            sex: req.body.sex,
            cloudinary_id: result.public_id,
            type: req.body.type,
        });
        // save sell
        await lostFound.save();
        res.json(lostFound);
     } catch (err) {
        console.log(err);
    }
})

//     router.get("/", async (req, res) => {
//   try {
//     const lostFoundAll = await LostFound.find();
//     res.json(lostFoundAll);
//   } catch (err) {
//     console.log(err);
//   }
// })

router.get("/", ctrl.lostFoundAll);

module.exports = router;