const ctrlreservas = {},
  Reservas = require("../models/reservas");

ctrlreservas.create = async (req, res) => {
  console.log(req.body)
  const newreservas = new Reservas({
    name: req.body.name,
    personal_id: req.body.personal_id,
    date: req.body.date,
    reservation_id: req.body.reservation_id,
    description: req.body.description,
    state: req.body.state,
    state_comment: req.body.state_comment
  });
  await newreservas.save();
  res.json({
    msg: "Reservation created successfully",
    status: true  
  });
};

ctrlreservas.list = async (req, res) => {
    const reservas = await Reservas.find();
    console.log(reservas);
    res.json(reservas);
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

module.exports = ctrlreservas;