const multer = require("multer");

//lugar donde se guardan las imagenes
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
});

//configuracion del multer
const upload = multer({ storage });

module.exports = {
  upload,
};