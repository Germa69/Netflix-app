const authRouter = require("./auth");
const userRouter = require("./users");
const movieRouter = require("./movies");
const listRouter = require('./lists');

function route(app) {
    app.use("/api/auth", authRouter);
    app.use("/api/users", userRouter);
    app.use("/api/movies", movieRouter);
    app.use('/api/lists', listRouter);
}

module.exports = route;
