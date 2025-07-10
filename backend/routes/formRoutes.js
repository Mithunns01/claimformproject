const express = require('express');
const router = express.Router();
const formController = require('../controller/formController');

router.post('/', formController.submitForm);
router.get('/', formController.getForms);

module.exports = router;
