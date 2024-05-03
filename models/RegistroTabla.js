const mongoose = require('mongoose');

const registroTablaSchema = new mongoose.Schema({
    Tabla: String,
});

const RegistroTabla = mongoose.model('RegistroTabla', registroTablaSchema);

module.exports = RegistroTabla;
