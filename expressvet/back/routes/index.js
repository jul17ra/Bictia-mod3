const { Router } = require("express"),
  router = Router();

router.use("/reservas", require("../routes/reservas.route"));
router.use("/medicos", require("../routes/medicos.route"));
router.use("/login", require("../routes/login.route"));
/*router.use("/employees", require("../routes/employees.route"));
router.use("/concepts", require("../routes/concepts.route")); */

module.exports = router;