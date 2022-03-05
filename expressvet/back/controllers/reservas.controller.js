var uuid = require('node-uuid');
const ctrlreservas = {},
  Reservas = require("../models/reservas");

ctrlreservas.create = async (req, res) => {

  Reservas.find({
    "date": {
      $gte: new Date(req.body.date) - 1 * 60 * 60 * 1000,
      $lte: new Date(req.body.date) + 1 * 60 * 60 * 1000
    }
  }, function (err, results) {
    if (err) { console.log(err) };
    if (!results.length) {
//
    }
    else {
      results.forEach(function (result) {
        console.log(result.date);
        console.log("No disponible")

      });
    }
  });

  const newreservas = new Reservas({
    name: req.body.name,
    personal_id: req.body.personal_id,
    date: new Date(req.body.date),
    reservation_id: uuid.v4(),
    description: req.body.description,
    comment: [
      {
        comment_state: "Éxitoso",
        comment_date: Date.now() - 5 * 60 * 60 * 1000
      }
    ]
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
      $push: {
        comment: {
          comment_state: comentario,
          comment_date: Date.now() - 5 * 60 * 60 * 1000
        }
      },
    }
  );
  res.json({ "msg": "Canceled" });
};

/*ctrlcompany.delete = async (req, res) => {
    const { _id } = req.params;
    await Company.deleteOne({ _id: _id });
    res.json({ status: true });
}; */

module.exports = ctrlreservas;