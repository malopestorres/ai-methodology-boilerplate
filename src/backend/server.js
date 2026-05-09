/* Backend API - Node.js Express with AI-first methodology */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with SQL/NoSQL in production)
const itemsDb = {};

/**
 * GET /api/items - List all items
 */
app.get('/api/items', (req, res) => {
  const items = Object.values(itemsDb);
  res.json(items);
});

/**
 * POST /api/items - Create a new item
 */
app.post('/api/items', (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  const id = require('crypto').randomUUID();
  const item = { id, name, description, createdAt: new Date().toISOString() };
  itemsDb[id] = item;
  
  res.status(201).json(item);
});

/**
 * GET /api/items/:id - Get a specific item
 */
app.get('/api/items/:id', (req, res) => {
  const item = itemsDb[req.params.id];
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

/**
 * PUT /api/items/:id - Update an item
 */
app.put('/api/items/:id', (req, res) => {
  const item = itemsDb[req.params.id];
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  const { name, description } = req.body;
  item.name = name;
  item.description = description;
  
  res.json(item);
});

/**
 * DELETE /api/items/:id - Delete an item
 */
app.delete('/api/items/:id', (req, res) => {
  if (!itemsDb[req.params.id]) {
    return res.status(404).json({ error: 'Item not found' });
  }
  delete itemsDb[req.params.id];
  res.json({ message: 'Item deleted successfully' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing