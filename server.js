const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const RootRouter = require('./routes/root');
const AuthRouter = require('./routes/auth');
const AdminRouter = require('./routes/admin');
const LogoutRouter = require('./routes/logout');
const RegisterRouter = require('./routes/register');
const RefreshTokenRouter = require('./routes/refresh');
const EmployeesRouter = require('./routes/api/employees');

const PORT = process.env.PORT || 1234;
const app = express();

app.use(logger);
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/', RootRouter);
app.use('/auth', AuthRouter);
app.use('/logout', LogoutRouter);
app.use('/register', RegisterRouter);
app.use('/refresh', RefreshTokenRouter);

app.use(verifyJWT);
app.use('/admin', AdminRouter);
app.use('/employees', EmployeesRouter);

app.all('*', (req, res) => {
  res.sendStatus(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
