const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  password: "cdac",
  database: "cdac",
  user: "pgdac1",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `INSERT INTO message(username,password,email,mobile) values (?,?,?,?)`;
  connection.queryAsync(sql, [
    user.username,
    user.password,
    user.email,
    user.mobile,
  ]);
  console.log("connection started");

  await connection.endAsync();
};

let user = {
  username: "himanshi",
  password: "1234",
  email: "him@gmail.com",
  mobile: "9867452310",
};
addUser(user);

const selectAlluser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `SELECT * from message`;
  let list = await connection.queryAsync(sql, []);

  console.log(list);

  await connection.endAsync();
  return list;
};

selectAlluser();

module.exports = { addUser, selectAlluser };
