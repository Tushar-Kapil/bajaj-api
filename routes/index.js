const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  const { data } = req.body;
  if(!data) return res.json({msg: "Send data please and select me"});
  
  const capital_alphabets_array = data
    .map((x) => x.toUpperCase())
    .filter((x) => x != parseInt(x));

  const odd_numers_array = data
    .map((x) => parseInt(x))
    .filter((x) => x % 2 !== 0)
    .filter((x) => x == parseInt(x));

  const even_numbers_array = data
    .map((x) => parseInt(x))
    .filter((x) => x % 2 === 0);

  const result = {
    is_success: true,
    user_id: "tushar_kapil_2110991462",
    email: "tushar1462.be21@chitkara.edu.in",
    roll_number: "2110991462",
    odd_numers_array,
    even_numbers_array,
    capital_alphabets_array,
  };

  return res.status(200).json(result);
});

module.exports = router;
