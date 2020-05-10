const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");

//@route  GET api/profile/me
//@desc   Get current user Profil
//@access Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });
    if (!profile) {
      return res
        .status(404)
        .json({ msg: "There is no profile for this request." });
    }

    // if the profile exists populate user [name,avatar]
    res.json(profile.populate("user", ["name", "avatar"]));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("Status", "Status is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
    ],
  ],
  async (req, res) => {}
);

module.exports = router;
