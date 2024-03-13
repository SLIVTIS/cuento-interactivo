const express = require('express');

const app = express();
app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/chapter-1.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-1.html');
});
app.get('/chapter-2.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-2.html');
});
app.get('/chapter-3.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-3.html');
});
app.get('/chapter-4.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-4.html');
});
app.get('/chapter-5.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-5.html');
});
app.get('/chapter-6.html', (req, res) =>{
    res.sendFile(__dirname + '/chapter-6.html');
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () =>{
    console.log(`Servidor en http://localhost:${PORT}`);
})