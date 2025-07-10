const express = require('express');
const cookie = require('cookie');
const path = require('path');
const app = express();
const PORT = 4444;


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Set-Cookie',
        cookie.serialize(
            'loogedIn', Boolean(true),
            {
                httpOnly: true,
                maxAge: 60 * 60 * 24, // 1 day
                
            }));

    res.send('Learning Cookies');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
