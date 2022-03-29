const List = require("../models/List");

class ListController {
    // [GET] /api/lists/
    async all(req, res) {
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];

        try {
            // The case where 1 query parameters match
            if (typeQuery) {
                // The case where 2 query parameters match
                if (genreQuery) {
                    list = await List.aggregate([
                        {
                            $sample: {
                                size: 10,
                            },
                        },
                        {
                            $match: {
                                type: typeQuery,
                                genre: genreQuery,
                            },
                        },
                    ]);
                } else {
                    list = await List.aggregate([
                        {
                            $sample: {
                                size: 10,
                            },
                        },
                        {
                            $match: {
                                type: typeQuery,
                            },
                        },
                    ]);
                }
            } else {
                list = await List.aggregate([
                    {
                        $sample: {
                            size: 10,
                        },
                    },
                ]);
            }
            res.status(200).json(list);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [POST] /api/lists/
    async create(req, res) {
        if (req.user.isAdmin) {
            const newList = new List(req.body);

            try {
                const savedList = await newList.save();
                res.status(201).json(savedList);
            } catch (err) {
                res.status(500).json("You are not allowed!");
            }
        }
    }

    // [PUT] /api/lists/:id
    async update(req, res) {
        if (req.user.isAdmin) {
            try {
                const updatedList = await List.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedList);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }

    // [DELETE] /api/lists/:id
    async delete(req, res) {
        if (req.user.isAdmin) {
            try {
                await List.findByIdAndDelete(req.params.id);
                res.status(200).json("The list has been deleted...");
            } catch (err) {
                res.status(500).json("You are not allowed!");
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }
}

module.exports = new ListController();
