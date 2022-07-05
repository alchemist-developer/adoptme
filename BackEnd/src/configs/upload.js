const multer = require('multer')
const path = require("path")
const fs = require('fs')

const pathImageFolder = path.join("src/public", "images");
const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
      if(!fs.existsSync(pathImageFolder)) {
        fs.mkdirSync(pathImageFolder, { recursive: true })
      }
      cb(null, pathImageFolder)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const maxSize = 10485760 //10 Mb
  const upload=multer({
    storage:storage,
    limits:{
      fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  })

  module.exports=upload
