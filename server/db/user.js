import { mysql } from './config';

export class UserDataBase extends Mysql {
  getUserById() {
    this.query('SELECT 1 + 1 AS solution', (results, fields) => {});
  }
}
