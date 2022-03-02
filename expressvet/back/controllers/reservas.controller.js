const reservas = require("../models/reservas");
var uuid = require('node-uuid');


const ctrlreservas = {},
  Reservas = require("../models/reservas");

ctrlreservas.create = async (req, res) => {
  console.log(req.body)
  const newreservas = new Reservas({
    name: req.body.name,
    personal_id: req.body.personal_id,
    date: req.body.date,
    reservation_id: uuid.v4(),
    description: req.body.description
  });
  await newreservas.save();
  res.json({
    msg: "Reservation created successfully",
    status: true
  })
};

ctrlreservas.list = async (req, res) => {
    const reservas = await Reservas.find();
    console.log(reservas);
    res.json(reservas);
};

ctrlreservas.update = async (req, res) => {
    const { reservation_id, comentario, state, comment, } = req.body;
    await Reservas.findOneAndUpdate(
      { reservation_id: reservation_id },
      { 
        state: "Cancelada",
        comment:{
          comment_state: comentario,
          comment_date: Date.now() - 5*60*60*1000
        },
      }
    );
    res.json({ "msg":"Canceled" });
};

/*ctrlcompany.delete = async (req, res) => {
    const { _id } = req.params;
    await Company.deleteOne({ _id: _id });
    res.json({ status: true });
}; */

module.exports = ctrlreservas;