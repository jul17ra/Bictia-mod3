const ctrlproducts = {},
  Products = require("../models/products");

ctrlproducts.create = async (req, res) => {
  console.log(req.body)
  const newproducts = new Products({
    type: req.body.type,
    address: req.body.address,
    neighborhood: req.body.neighborhood,
    city: req.body.city,
    rooms: req.body.rooms,
    floors: req.body.floors,
    bathrooms: req.body.bathrooms,
    price: req.body.price,
    garage: req.body.garage,
    dimensions: req.body.dimensions,
    stratum: req.body.stratum,
    antiquity: req.body.antiquity,
    agent: req.body.agent
  });
  await newproducts.save();
  res.json({
    msg: "Product created successfully",
    status: true  
  });
};

ctrlproducts.list = async (req, res) => {
    const products = await Products.find();
    console.log(products);
    res.json(products);
};

/*ctrlcompany.update = async (req, res) => {
    const { _id, company, } = req.body;
    await Company.findOneAndUpdate(
      { _id: _id },
      { 
        company: company,
      }
    );
    res.json({ status: true });
};

ctrlcompany.delete = async (req, res) => {
    const { _id } = req.params;
    await Company.deleteOne({ _id: _id });
    res.json({ status: true });
}; */

module.exports = ctrlproducts;