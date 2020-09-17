const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const apiRoutes = require("./products.js");

// API Routes
router.use("/api", apiRoutes);

async function asyncFunc() {
  let data;
  // fetch data from a url endpoint
  axios.get("/")
    .then((result) => {
      data = result
    });
  return data;
}

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
