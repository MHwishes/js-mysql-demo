var mysql = require('mysql');

var TEST_DATABASE = 'mysqlTest';//数据库名
var TEST_TABLE = 'user';//表名

var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111'

});


client.connect(function(err){
    if(!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});

//创建数据库
client.query('create database ' + TEST_DATABASE, function (err) {
    if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
        throw err;
    }
});

client.query('USE ' + TEST_DATABASE);//使用该数据库

//创建表
client.query(
      'CREATE TABLE '+TEST_TABLE+
 '(id INT(11) AUTO_INCREMENT, '+
  'username VARCHAR(255), '+
  'password VARCHAR(255), '+
  'created DATETIME, '+
  'PRIMARY KEY (id))'
);



 client.end();//关闭连接