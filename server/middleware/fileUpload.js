const multer = require('multer');
const { uuid } = require('uuidv4');
const takeError = require('../utilities/error');
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/images');
  },
  filename: function (req, file, cb) {
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, new Date().getTime().toString() + '.' + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(takeError('Image upload fail', 400), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
module.exports = upload;
