const Category = require('../models/Category');


//CREATE CATEGORY
exports.createCategory = async( req, res, next ) => {
    const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET CATEGORY

exports.getCategory = async(req, res, next) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
      } catch (err) {
        res.status(500).json(err);
      }
}

