const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  }
};

const fsPromisses = require('fs/promises');
const path = require('path');

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }

  const refreshToken = cookies.jwt;

  let foundUser = usersDB.users.filter(user => user.refreshToken == refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }

  const otherUsers = usersDB.users.filter(
    user => user.refreshToken !== foundUser.refreshToken
  );
  foundUser = { ...foundUser, refreshToken: '' };
  usersDB.setUsers([...otherUsers, foundUser]);

  await fsPromisses.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.sendStatus(204);
};

module.exports = { handleLogout };
