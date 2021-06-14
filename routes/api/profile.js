const express = require('express');
const router = express.Router();

// GET api/profile || TEST ROUTE || Public
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;