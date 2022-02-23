const ctrlagents = {},
  Agents = require("../models/agents");

ctrlagents.create = async (req, res) => {
  console.log(req.body)
  const newagents = new Agents({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  });
  await newagents.save();
  res.json({
    msg: "Agent created successfully",
    status: true  
  });
};

ctrlagents.list = async (req, res) => {
    const agents = await Agents.find();
    console.log(agents);
    res.json(agents);
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

module.exports = ctrlagents;