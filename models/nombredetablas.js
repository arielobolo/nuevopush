// models/NombreDeTablas.js
const mongoose = require('mongoose');

const nombreDeTablasSchema = new mongoose.Schema({
  nombreTabla: { type: String, unique: true },
  nombreArchivo: String,
  fechaCreacion: { type: Date, default: Date.now },
});

const NombreDeTablas = mongoose.model('NombreDeTablas', nombreDeTablasSchema);

module.exports = NombreDeTablas;
