// config/dbnube.js
const mongoose = require('mongoose');

const connectconlanube = () => {
  // Cadena de conexión a tu base de datos en MongoDB Atlas
  const uri = 'mongodb+srv://arielobolo:1BmpX9jD7vJHYEC3@cluster0.8wakkry.mongodb.net/dbapi?retryWrites=true&w=majority';
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('PUSHI : NO ME HE PODIDO CONECTAR CON MONGO EN LA NUBE .... AGUARDEMOS LA CONEXION CON WHATSAP !! UN MOMENTO PORFAOR..');
    // Puedes personalizar el mensaje de error que se muestra
  });

  db.once('open', () => {
    console.log('PUSHI SE CONECTÓ A MONGO EN LA NUBE ESPERA ....INTENTARE CONECTARME A WHATSAPP ESPERA...');
  });

  process.on('unhandledRejection', (reason, promise) => {
    // Puedes manejar o registrar el error sin detener la aplicación aquí
  });

  // Exporta tanto la función como el objeto db
  return { connectconlanube, db };
};

module.exports = connectconlanube();

