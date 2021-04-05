//node后端
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//连接数据库 https://www.runoob.com/nodejs/nodejs-mysql.html
const conn = mysql.createConnection({
    host: 'localhost',//mysql连接ip地址
    user: 'root',
    password: '123568',//mySql用户名密码
    database: 'auto_scan',//mySql数据库名
    port: '3306'//mysql连接端口
});
conn.connect()

//解决跨域问题
//const cors = require('cors')
//app.use(cors());
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//接口定义
app.get('/api/demo/get',function (req, res){
    console.log(req.query)
    //返回参数
    res.send(req.query)
})
app.get('/api/demo/get_house_title',function (req, res){
    sql = 'select house_title,house_price from house_info where house_price=?'
    params = [req.query['price']]
    conn.query(sql,params,function (err,result){
        //返回参数
        console.log('--------------------------SELECT TITLE----------------------------');
        console.log(result)
        res.send(result)
    })
})
app.get('/api/demo/get_all_files',function (req,res){
    var path = req.query['path']
    files = fs.readdirSync(path)
    console.log(files)
    res.send(files)
})

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');