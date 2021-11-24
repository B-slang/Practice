const Sequelize = require("sequelize");
const db = require("../models");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});

exports.productCreate = [
  uploads.single("productImage"),
  async (req, res, next) => {
    try {
      const data = await db.products.create({
        categoryId: req.body.categoryId,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        description: req.body.description,
        productImage: req.file.filename,
        stock: req.body.stock,
      });

      res.status(200).json({
        success: true,
        message: "product added successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "something went wrong",
      });
    }
  },
];

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  let data = await db.products.destroy({ where: { id } });

  if (!data) {
    return res.status(400).json({
      message: "failed to delete products",
    });
  }
  return res.status(200).json({
    message: "Product deleted successfully",
  });
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { productName, productPrice, description } = req.body;

    console.log("Id", id);
    let data = await db.products.update(
      { productName, productPrice, description },
      {
        where: { id: id },
      }
    );
    console.log(data);
    return res.status(200).json({
      message: "updated successfully",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

exports.getAllProduct = async (req, res) => {
  let data = await db.products.findAll();

  return res.status(200).json({
    message: "all data",
    data,
    // console.log(data)
  });
  return res.status(400).json({
    message: "No data else something went wrong",
  });
};
