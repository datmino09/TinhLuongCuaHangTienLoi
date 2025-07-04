const express = require("express");
const route = express.Router();
const TaiKhoanController = require("../controllers/TaiKhoanController");
const { uploadAvatar } = require("../middleware/upload");
const { authMiddleware } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/authMiddleware");
route.get("/search", TaiKhoanController.searchEmployee);
route.get("/getAllNhanVienVaQuanLy", TaiKhoanController.getAllNhanVienVaQuanLy);
route.get(
  "/getAllQuanLyByChiNhanh/:MaCN",
  TaiKhoanController.getAllQuanLyByChiNhanh
);
route.put("/resetPass/:MaTK", TaiKhoanController.resetMK);
route.put("/changePass/:MaTK", TaiKhoanController.changePass);
route.put("/updateNgungLamViec", TaiKhoanController.updateNgungLamViec);
route.put("/updateTiepTucLamViec", TaiKhoanController.updateTiepTucLamViec);
route.get("/", TaiKhoanController.getAll);
route.get("/:MaTK", TaiKhoanController.getById);
route.post(
  "/",
  authMiddleware,
  authorizeRoles(1, 3),
  uploadAvatar.single("avatar"),
  TaiKhoanController.create
);
route.put(
  "/:MaTK",
  authMiddleware,
  authorizeRoles(1, 3),
  uploadAvatar.single("avatar"),
  TaiKhoanController.update
);
route.post("/login", TaiKhoanController.login);

module.exports = route;
