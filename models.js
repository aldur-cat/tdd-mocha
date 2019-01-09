const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false  // 기본은 console.log와 바인딩 되어있음
});

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = {
  Sequelize,
  sequelize,
  User
}