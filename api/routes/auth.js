const router = require("express").Router();
const User = require("../models/driverSchema");
const bcrypt = require("bcrypt");

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ // Find by username
            username: req.body.username
        });

        if (!user) {
            return res.status(404).json("There was no account found with that username.");
        }

        const validPassword = await bcrypt.compare(req.body.password, driver.password); // Check pw

        if (!validPassword) {
            return res.status(400).json("The password you entered was not correct.");
        }

        // const {password, __v, ...other} = user.doc;
        // console.log(user);
        return res.status(200).json(user);

    } catch(err) {
        console.log("ERROR: Login failed.");
        return res.status(500).json(err);
    }
});

module.exports = router;