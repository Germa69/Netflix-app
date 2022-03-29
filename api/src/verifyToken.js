const jwt = require('jsonwebtoken');

function authToken(req, res, next) {
    const authHeader = req.headers.token;
	// Header trả phía người dùng là 1 String gồm `Beaer [token]`
	const token = authHeader.split(' ')[1];
	if (!token) res.sendStatus(401).json("You are not authorization");

    // Nếu có token thì xác thực xem token có hợp lệ hay không
	// verify: 3 prams
	// 1. token
	// 2. SECRET_KEY
	// 3. callback

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if(err) res.sendStatus(403).json("Token is not valid!");
        req.user = user
		next();
	})
}

module.exports = authToken;