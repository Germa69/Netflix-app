const Movie = require("../models/Movie");

class MovieController {
    // [GET] (GET ALL) /api/movies/
    async all(req, res) {
        const query = req.query.new;

        if (req.user.isAdmin) {
            try {
                const movies = query
                    ? await Movie.find().limit(5)
                    : await Movie.find();
                res.status(200).json(movies.reverse());
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }

    // [GET] (RANDOM) /api/movies/random
    async random(req, res) {
        const type = req.query.type;
        let movie;

        try {
            if (type === "series") {
                movie = await Movie.aggregate([
                    {
                        $match: {
                            isSeries: true,
                        },
                    },
                    {
                        $sample: {
                            size: 1,
                        },
                    },
                ]);
            } else {
                movie = await Movie.aggregate([
                    {
                        $match: {
                            isSeries: false,
                        },
                    },
                    {
                        $sample: {
                            size: 1,
                        },
                    },
                ]);
            }

            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [GET] /api/movies/find/:id
    async find(req, res) {
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [POST] /api/movies/
    async create(req, res) {
        if (req.user.isAdmin) {
            const newMovie = new Movie(req.body);

            try {
                const savedMovie = await newMovie.save();
                res.status(201).json(savedMovie);
            } catch (err) {
                res.send(500).json(err);
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }

    // [PUT] /api/movies/:id
    async update(req, res) {
        if (req.user.isAdmin) {
            try {
                const updatedMovie = await Movie.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedMovie);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }

    // [DELETE] /api/movies/:id
    async delete(req, res) {
        if (req.user.isAdmin) {
            try {
                await Movie.findByIdAndDelete(req.params.id);
                res.status(200).json("The movie has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(403).json("You are not allowed!");
        }
    }
}

module.exports = new MovieController();
