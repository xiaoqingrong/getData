var express = require('express');
var todoControllers = require('./interface.js');
var app = express();
// 设置跨域

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8888");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//   app.use(cors()); 
app.use(express.static('/public'));

todoControllers(app);


app.listen(3001,'0.0.0.0');