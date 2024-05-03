//createModelFromFileName.js
const mongoose = require('mongoose');

const createModelFromFileName = (fileName) => {
  const schemaFields = {
    "Fecha y hora": String,
    Fecha: Date,
    Hora: String,
    Pos: Number,
    Profesional: String,
    Especialidad: String,
    Cons: Number,
    Afiliado: String,
    Dni: String,
    Celular: String,
    Estado: String,
    Tipo: String,
    Con: String,
    Pr: String,
  };

  const dynamicSchema = new mongoose.Schema(schemaFields);

  // Usa el nombre del archivo como nombre del modelo
  return mongoose.model(fileName, dynamicSchema);
};

module.exports = createModelFromFileName;
