const router = require("express").Router();
const controller = require("../controllers/controller");
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, path.join(__dirname, "../uploads"));
    } else {
      cb(new Error("invalid file type", null));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", controller.findAll);
router.get("/add", controller.formAdd);
router.post("/add", upload, controller.saveData);
router.get("/:id/delete", controller.deleteData);
router.get("/:id/edit", controller.formEdit);
router.post("/:id/edit", controller.saveEdit);
// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

module.exports = router;
