const mongoose = require('mongoose');

   const DisplayNameSchema = new mongoose.Schema({
       name: { type: String, required: true }
   });

   module.exports = mongoose.model('DisplayName', DisplayNameSchema);
