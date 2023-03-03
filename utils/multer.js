const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file) {
      cb(new Error('No file uploaded'), false);
      return;
    }
      const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
  limits: {
    files: 5, // set maxCount to 5
    fileSize: 1024 * 1024 * 7, // set maximum file size to 7MB
  },
});