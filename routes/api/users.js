const express = require('express');
const router = express.Router();

// GET api/users || TEST ROUTE || Public
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;