const express = require("express");

/* Middlewares */
const checkLogin = require("../middlewares/checkLogin");
const { imageUpload } = require("../middlewares/imageUplod");

/* Controllers */
const {
  showMain,
  seePost,
  addComment,
  updateUps,
  updateDowns,
  showMyPage,
  getAddPost,
  postAddPost,
  getUpdatePost,
  updatePost,
  deletePost,
} = require("../controllers/mainController");

const router = express.Router();

router.route("/").all(checkLogin).get(showMain);
router.route("/myPage").all(checkLogin).get(showMyPage);
router
  .route("/addPost")
  .all(checkLogin)
  .get(getAddPost)
  .post(imageUpload.single("image"), postAddPost);
router.route("/:id").all(checkLogin).get(seePost);
router
  .route("/:id/updatePost")
  .all(checkLogin)
  .get(getUpdatePost)
  .put(updatePost);
router.route("/:id/deletePost").all(checkLogin).delete(deletePost);
router.route("/:id/addComment").all(checkLogin).post(addComment);
router.route("/:id/updateUps").all(checkLogin).put(updateUps);
router.route("/:id/updateDowns").all(checkLogin).put(updateDowns);
module.exports = router;
