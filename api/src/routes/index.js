const authRouter = require("./auth");
const userRouter = require("./users");
const movieRouter = require("./movies");

function route(app) {
    app.use("/api/auth", authRouter);
    app.use("/api/users", userRouter);
    app.use("/api/movies", movieRouter);
}

module.exports = route;
