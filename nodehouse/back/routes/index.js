const { Router } = require("express"),
  router = Router();

router.use("/agents", require("../routes/agents.route"));
router.use("/products", require("../routes/products.route"));
router.use("/login", require("../routes/login.route"));
/*router.use("/employees", require("../routes/employees.route"));
router.use("/concepts", require("../routes/concepts.route")); */

module.exports = router;