const mysql = require('mysql');

export class mysql {
  constructor() {
    this.dataBase = mysql.createConnection({
      host: 'localhost',
      user: 'me',
      password: 'secret',
      database: 'my_db',
    });
  }

  connect() {
    dataBase.connect();
  }

  query(query, callback) {
    dataBase.connect();
    this.dataBase.query(query, (error, results, fields) => {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
      this.dataBase.end();
      callback(results, fields);
    });
  }

  connectEnd() {
    this.dataBase.end();
  }
}
