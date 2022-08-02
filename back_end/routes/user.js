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
    // Delete,
    // aUser,
    // allUser,
    // Stats,
} = require("../controllers/user");

router.put("/:id", verifyTokenAndAuthorization, Update);
// router.delete("/:id", verifyTokenAndAuthorization, Delete);
// router.get("/find/:id", verifyTokenAndAdmin, aUser);
// router.get("/", verifyTokenAndAdmin, allUser);
// router.get("/stats", verifyTokenAndAdmin, Stats);

module.exports = router;