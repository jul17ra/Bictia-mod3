const ctrlmedicos = {},
  Medicos = require("../models/medicos");

ctrlmedicos.create = async (req, res) => {
  console.log(req.body)
  const newmedicos = new Medicos({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  await newmedicos.save();
  res.json({
    msg: "Médico created successfully",
    status: true  
  });
};

ctrlmedicos.list = async (req, res) => {
    const medicos = await Agents.find();
    console.log(medicos);
    res.json(medicos);
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

module.exports = ctrlmedicos;