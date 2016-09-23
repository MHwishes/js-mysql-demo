var mysql = require('mysql');

var TEST_DATABASE = 'mysqlTest';//数据库名
var TEST_TABLE = 'user';//表名

var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111'

});


client.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});

client.query('USE ' + TEST_DATABASE);//使用该数据库


var query = client.query('INSERT INTO ' + TEST_TABLE + ' SET username = ?, password = ?, created = ?',
    ['zhangsan', '1234', '2010-08-16 12:42:15'], function (err, results) {
        console.log(results.insertId);//返回记录id
    }
);

client.end();//关闭连接