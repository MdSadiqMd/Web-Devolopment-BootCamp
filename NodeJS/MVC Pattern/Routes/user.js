const express = require("express");
const router = express.Router();
const {
    handlegetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} = require("../Models/ModelUser");

router.route("/")
      .get(handlegetAllUsers)
      .post(handleCreateNewUser);

router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdateUserById)
  .delete(handleCreateNewUser);

module.exports=router;

