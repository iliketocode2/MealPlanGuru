const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the environment variable
});

app.get('/api/tufts/posts/:postId/viewCount', async (req, res) => {
  const { postId } = req.params;
  try {
    const result = await pool.query('SELECT view_count FROM posts WHERE id = $1', [postId]);
    if (result.rows.length > 0) {
      res.json({ viewCount: result.rows[0].view_count });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/tufts/posts/:postId/incrementViewCount', async (req, res) => {
  const { postId } = req.params;
  try {
    const result = await pool.query(
      'UPDATE posts SET view_count = view_count + 1 WHERE id = $1 RETURNING view_count',
      [postId]
    );
    if (result.rows.length > 0) {
      res.json({ viewCount: result.rows[0].view_count });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// New endpoint to get all posts
app.get('/api/tufts/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// New endpoint to add a new post
app.post('/api/tufts/posts', async (req, res) => {
  const { id, title, date, content, author, imageUrl, tags } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (id, title, date, content, author, image_url, tags, view_count) VALUES ($1, $2, $3, $4, $5, $6, $7, 0) RETURNING *',
      [id, title, date, content, author, imageUrl, tags]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});