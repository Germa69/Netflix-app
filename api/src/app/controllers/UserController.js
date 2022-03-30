const User = require("../models/User");
const CryptoJS = require("crypto-js");

class UserController {
    // [GET] /api/users/
    async all(req, res) {
        const query = req.query.new;

        if (req.user.isAdmin) {
            try {
                const users = query
                    ? await User.find().sort({ id: -1 }).limit(5)
                    : await User.find();
                res.status(200).json(users);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You can not allow to see all user!");
        }
    }

    // [GET] /api/users/stats
    async stats(req, res) {
        const today = new Date();
        const latest = today.setFullYear(today.setFullYear() - 1);

        try {
            const data = await User.aggregate([
                {
                    $project: {
                        month: {
                            $month: "$createdAt",
                        },
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: {
                            $sum: 1,
                        },
                    },
                },
            ]);

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [GET] /api/users/find/:id
    async find(req, res) {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...info } = user._doc;
            res.status(200).json(info);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [PUT] /api/users/:id
    async update(req, res) {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.SECRET_KEY
                ).toString();
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );

                res.status(200).json(updatedUser);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You can update only your account!");
        }
    }

    // [DELETE] /api/users/:id
    async delete(req, res) {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You can delete only your account!");
        }
    }
}

module.exports = new UserController();
