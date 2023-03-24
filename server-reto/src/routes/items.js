const express = require('express');
const router = express.Router();
const { getItems, getItemstInfo } = require('../controller/items');

router.get('/', getItems);
router.get('/:id', getItemstInfo);

module.exports = router;
