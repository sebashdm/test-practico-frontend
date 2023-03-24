const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');

router.use('/api/items', itemsRouter);

module.exports = router;
