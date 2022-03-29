const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Function Constructor
class AuthController {
    // [POST] /api/auth/register
    async register(req, res) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString(),
        });

        try {
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(401).json("Wrong email or password!!!");

            var bytes = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET_KEY
            );
            var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            originalPassword !== req.body.password &&
                res.status(401).json("Wrong email or password!!!");

            const data = {
                id: user._id,
                isAdmin: user.isAdmin,
            };

            const accessToken = jwt.sign(
                data,
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "5d",
                }
            );

            const { password, ...info } = user._doc;

            res.status(200).json({ ...info, accessToken });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new AuthController();
