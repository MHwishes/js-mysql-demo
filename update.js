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


//修改数据
client.query('update '+ TEST_TABLE+" set password = ? where id = ?", ["123456", 1], function (err, results) {//修改id为1的记录的password
    console.log(results);
    /** result 为格式如下的信息
     {   fieldCount: 0,
 affectedRows: 1,
   insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '(Rows matched: 1  Changed: 1  Warnings: 0',
    protocol41: true,
    changedRows: 1
}
     */
});


client.end();//关闭连接