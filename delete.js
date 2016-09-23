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

//删除数据
client.query("delete from "+ TEST_TABLE +" where id = ?", [1], function (err, results) {//删除id为1的记录
    console.log(results);
    /** result 为格式如下的信息
     {
     fieldCount: 0,
     affectedRows: 1,
     insertId: 0,
     serverStatus: 2,
     warningCount: 0,
     message: '',
     protocol41: true,
     changedRows: 0
   }
     */
});

client.end();//关闭连接