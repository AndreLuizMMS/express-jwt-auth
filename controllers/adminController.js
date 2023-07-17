const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  }
};

const fsPromises = require('fs/promises');
const path = require('path');

const getUsers = (req, res) => {
  const users = [];

  usersDB.users.forEach(user => {
    const userData = { username: user.username, roles: user.roles };
    users.push(userData);
  });

  return res.json(users);
};

const setAdmin = async (req, res) => {
  const reqData = req.body.targetUsername;
  if (!reqData) {
    return res.status(400).json({ error: 'Invalid data, must provide targetUsername' });
  }

  const targetUser = usersDB.users.filter(user => user.username === reqData);
  if (!targetUser) {
    return res.status(400).json({ error: `Invalid data, user ${reqData} doesn't exist` });
  } else if (!targetUser.roles?.Admin) {
    return res.status(400).json({ error: `User ${reqData} is already an Admin ` });
  }

  const otherUsers = usersDB.users.filter(user => user.username !== reqData);
  const resultData = [
    ...otherUsers,
    { ...targetUser[0], roles: { ...targetUser[0].roles, Admin: 5150 } }
  ];

  usersDB.setUsers(resultData);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  return res.json({ status: `${reqData} role updated`, data: resultData });
};

const setEditor = async (req, res) => {
  const reqData = req.body.targetUsername;
  if (!reqData) {
    return res.status(400).json({ error: 'Invalid data, must provide targetUsername' });
  }

  const targetUser = usersDB.users.filter(user => user.username === reqData);
  if (!targetUser) {
    return res.status(400).json({ error: `Invalid data, user ${reqData} doesn't exist` });
  } else if (!targetUser.roles?.Editor) {
    return res.status(400).json({ error: `User ${reqData} is already an Editor ` });
  }

  const otherUsers = usersDB.users.filter(user => user.username !== reqData);
  const resultData = [
    ...otherUsers,
    { ...targetUser[0], roles: { ...targetUser[0].roles, Editor: 1984 } }
  ];

  usersDB.setUsers(resultData);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  return res.json({ status: `${reqData} role updated`, data: resultData });
};

module.exports = { setEditor, setAdmin, getUsers };
