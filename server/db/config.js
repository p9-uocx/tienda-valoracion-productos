const mysql = require('mysql');

exports.Mysql = class Mysql {
  constructor() {
    this.dataBase = mysql.createConnection({
      host: 'localhost',
      port: '8889',
      user: 'p9_uoc_user',
      password: 'EIBgv7o1CA4bqlK4',
      database: 'p9_uoc',
    });
  }

  connect() {
    this.dataBase.connect(err => {
      if (err) throw new Error(err.stack);
    });
  }

  query(query) {
    return new Promise((resolve, reject) => {
      this.dataBase.query(query, (err, results, fields) => {
        if (err) reject(err);
        resolve(results, fields);
      });
    });
  }

  connectEnd() {
    this.dataBase.end(err => {
      if (err) throw new Error(err.stack);
    });
  }
};
