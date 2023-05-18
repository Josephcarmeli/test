import express from "express";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.static('public'));

const pool = new pg.Pool({
    user: 'joseph',
    database: 'test',
    password: 123
});

app.get('/api/posts', (req, res) => {
    pool.query('SELECT * FROM Posts', (err, result) => {
        if (err) {
            res.status(500).json({ error: error});
        } else {
            res.json(result.rows);
        }
    });
});

app.listen(3000, () => {
    console.log('server running')
});