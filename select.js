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


var query = client.query('select * from  ' + TEST_TABLE + ' where id = ?', [2], function (err, results) { //查询id为2的数据

        console.log(results);
        console.log(results[0].id);//返回记录id
        console.log(results[0].username);//返回记录名字
        console.log(results[0].password);//返回记录密码
        console.log(results[0].created);//返回记录id
    }
);


client.end();//关闭连接