const { Users } = require("../db/db");

async function auth(req, res, next) {
  try {
    let token = null;
    let authUser = null;
    if (req.session) {
      token = req.session.token;
    }

    if (token) {
      authUser = await Users.findOne({
        where: {
          token: token
        }
      });
    }

    if (authUser) {
      req.user = authUser;
      next();
    } else {
      res.status(401).redirect("/login");
    }
  } catch (err) {
    throw new Error(err);
    // res.status(500).send({ error: "Internal Error" });
  }
}

module.exports = { auth };
