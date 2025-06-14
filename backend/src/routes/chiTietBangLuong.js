const express = require("express");
const router = express.Router();
const chiTietBangLuongController = require("../controllers/chiTietBangLuongController");

router.get('/getByNhanVienAndNgay',chiTietBangLuongController.getByNhanVienAndNgay);
// Create a new salary detail
router.post("/", chiTietBangLuongController.create);

// Get all salary details
router.get("/", chiTietBangLuongController.findAll);

// Get salary detail by ID
router.get("/:id", chiTietBangLuongController.findOne);

// Update salary detail
router.put("/:id", chiTietBangLuongController.update);

// Delete salary detail
router.delete("/:id", chiTietBangLuongController.delete);

module.exports = router;
