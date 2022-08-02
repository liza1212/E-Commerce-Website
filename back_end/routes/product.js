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
    aProduct,
    allProduct,
    addProduct,
} = require("../controllers/product");

router.post("/", verifyTokenAndAdmin, addProduct);
router.put("/:id", verifyTokenAndAdmin, Update);
router.delete("/:id", verifyTokenAndAdmin, Delete);
router.get("/find/:id", aProduct);
router.get("/", allProduct);

module.exports = router;