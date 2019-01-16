require('dotenv').config()
const translate = require('translate');

translate.engine = 'yandex';
translate.key = process.env.DB_PASS;

translate('I am sitting with Harrison in a room.', 'mi').then(text => {
    console.log(text);
  });
