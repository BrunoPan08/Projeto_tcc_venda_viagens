const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser('mySecretKey'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const query = "INSERT INTO account (`username`, `password`) VALUES (?, ?)";
    const query2 = "SELECT * FROM account WHERE username = ?";

    db.query(query2, [username], async (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result?.length > 0) {
            res.send("User already exists");
        }
        if (result?.length === 0) {
            const hashedPassword = await bcrypt.hash(password, 10); // Correção aqui
            db.query(query, [username, hashedPassword], (err, result) => {
                if (err) {
                    console.log(err);
                }
                res.send("User created");
            });
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor iniciado na porta 3001');
});
