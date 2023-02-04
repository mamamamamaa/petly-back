const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const multerConfig = multer.diskStorage({
    destination: path.join(__dirname, "../", "tmp"),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '_' + file.originalname)
    }
});

const upload = multer({
    storage: multerConfig
});

module.exports = upload;