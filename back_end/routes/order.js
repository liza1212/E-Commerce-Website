const express = require("express");
const router = express.Router();

const 
{
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/authentication");

const 
{
    Update,
    Delete,
    addOrder,
    aOrder,
    allOrder,
} = require("../controllers/order");

router.post("/", verifyToken, addOrder);
router.put("/:id", verifyTokenAndAdmin, Update);
router.delete("/:id", verifyTokenAndAdmin, Delete);
router.get("/find/:id", verifyTokenAndAuthorization, aOrder);
router.get("/", verifyTokenAndAdmin, allOrder);

module.exports = router;