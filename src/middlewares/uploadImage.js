import multer from "multer";
import path from "path";
const profileImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const categoryImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/category");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const productImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/product");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploadProfileImage = multer({ storage: profileImageStorage });

export const uploadCategoryImage = multer({ storage: categoryImageStorage });

export const uploadProductImage = multer({ storage: productImageStorage });
