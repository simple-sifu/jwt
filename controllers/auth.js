const asyncHandler = require('../middleware/async');
const User = require('../models/User');

exports.reqister = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
