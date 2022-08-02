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
    aCart,
    allCart,
    addCart,
} = require("../controllers/cart");

router.post("/", verifyToken, addCart);
router.put("/:id", verifyTokenAndAuthorization, Update);
router.delete("/:id", verifyTokenAndAuthorization, Delete);
router.get("/find/:id", verifyTokenAndAuthorization, aCart);
router.get("/", verifyTokenAndAdmin, allCart);

module.exports = router;