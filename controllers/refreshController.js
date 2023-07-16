const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  }
};

require('dotenv').config();
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookie; 
  if (!cookies?.jwt) {
    return res.status(401);
  }

  const refreshToken = cookies.jwt;

  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username) {
      return res.secdStatus(403);
    }
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '4m' }
    );

    return res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
