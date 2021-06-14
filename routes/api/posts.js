const express = require('express');
const router = express.Router();

// GET api/posts || TEST ROUTE || Public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;