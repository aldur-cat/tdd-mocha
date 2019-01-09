const app = require('../');
const syncDb = require('./sync-db');

syncDb().then( _ => {
  app.listen(3000, () => {
    console.log('3000 포트로 응답 받습니다.');
  });
});

module.exports = app;