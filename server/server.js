//node后端
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//解决跨域问题
const cors = require('cors')
app.use(cors());
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

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');