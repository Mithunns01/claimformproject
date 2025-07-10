const Form = require('../models/formModel');

exports.submitForm = async (req, res) => {
  try {
    const newForm = await Form.create(req.body);
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
