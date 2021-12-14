const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();

//middlewares
app.use(express.json());


//routes
const authRoutes = require('./routes/authroute')

app.use('/auth', authRoutes)

//registration

//login
let refreshTokens = [];
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "brijesh" && password === "slang") {
    const access_token = jwt.sign(
      { sub: username },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: process.env.JWT_ACCESS_TIME }
    );
    const refresh_token = generateRefreshToken(username);

    return res.json({
      status: true,
      message: "login success",
      data: { access_token, refresh_token },
    });
  }
  return res.status(401).json({
    success: true,
    message: "login failed",
  });
});




app.post("/token", verifyRefreshToken, (req, res) => {
  const username = req.userData.sub;
  console.log(username);
  const access_token = jwt.sign(
    { sub: username },
    process.env.JWT_ACCESS_TOKEN,
    { expiresIn: process.env.JWT_ACCESS_TIME }
  );
  const refresh_token = generateRefreshToken(username);

  return res.json({
    status: true,
    message: " success",
    data: { access_token, refresh_token },
  });
});

//dashboard like

app.get("/dashboard", verifyToken, (req, res) => {
  console.log("welcome To The Dashboard");
  return res.json({
    status: true,
    message: "Welcome To The Dashboard",
  });
});

app.get("/logout", verifyToken, (req, res) => {

    const username = req.userData.sub;
    refreshTokens = refreshTokens.filter(x=>{
        x.username !== username
    })
    // console.log("welcome To The Dashboard");
    return res.json({
      status: true,
      message: " success ",
    });
  });

// custom middleware
function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "your session is not valid",
      data: error,
    });
  }
}




//verifyretok

function verifyRefreshToken(req, res, next) {
  const token = req.body.token;
  if (token === null) {
    return res.status(401).json({ success: false, message: "Invalid request" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_TOKEN);
    req.userData = decoded;

    let storedRefreshToken = refreshTokens.find(
      (x) => x.username === decoded.sub
    );
    if (storedRefreshToken === undefined) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Invalid request token not in store",
        });
    }


    if (storedRefreshToken.token != token) {
        return res
          .status(401)
          .json({
            success: false,
            message: " request token not same in store",
          });
      }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "your session is not valid",
      data: error,
    });
  }
}




//generate retok fn
function generateRefreshToken(username) {

  const refresh_token = jwt.sign(
    { sub: username },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_ACCESS_TIME }
  );
  let storedRefreshToken = refreshTokens.find((x) => x.username === username);
  if (storedRefreshToken === undefined) {
    refreshTokens.push({
      username: username,
      token: refresh_token,
    });
  } else {
    refreshTokens[
      refreshTokens.findIndex((x) => x.username === username)
    ].token = refresh_token;
  }
  return refresh_token;
}

app.listen(3000, () => {
  console.log("server is running at 3k");
});
