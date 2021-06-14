const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// POST to create new User || api/users || TEST ROUTE || Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with at least 6 characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    res.send('User Has been Created');
  }
);

module.exports = router;
