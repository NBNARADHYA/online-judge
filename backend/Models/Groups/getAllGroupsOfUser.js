const {pool} = require('../db');

/**
 *
 * @param {Object} param0
 * @param {String} param0.username
 * @return {Promise}
 */

function getAllGroupsOfUser({
    username : username,
}) {
    return new Promise(function(resolve, reject) {
        pool.query(`SELECT * FROM  UserGroups uG INNER JOIN groups g ON g.id = uG.group_id WHERE username = ? AND confidential = 0`,
      [
        username,
      ],
          function(error, results) {
            if (error) {
              reject(error);
              return;
            }
            resolve(results);
          }
        );
      });
}
module.exports = getAllGroupsOfUser;