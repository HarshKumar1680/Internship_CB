const express = require('express');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 4444;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');

    console.log('From / => loggedIn:', cookies.loggedIn);

    if (cookies.loggedIn === 'true') {
        return res.redirect('/profile');
    }

    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.setHeader('Set-Cookie',
        cookie.serialize('loggedIn', 'true', {
            maxAge: 15, // 5 seconds for testing
            path: '/'
        })
    );

    res.send("Cookie has been set. <a href='/'>Go Home</a>");
});

app.get('/profile', (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');

    console.log('From /profile => loggedIn:', cookies.loggedIn);

    if (cookies.loggedIn === 'true') {
        return res.send('✅ You are inside our app');
    }

    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
