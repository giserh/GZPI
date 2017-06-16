/**
 * Created by Lxg on 2017/5/13.
 */

let path = require('path');
let express = require('express');
let app = express();
// let port = process.env.PORT || 3000;
let port = 3000;

require('./config/webpack-dev-middleware')(app);

// app.use('/static', express.static(path.resolve(__dirname, '../static')));
app.use(express.static(path.resolve(__dirname, '../dist')));

let test = {
  name: 'test'
};

app.get('/project/myProject/getMyProjects.do', (req, res) => {
  res.json({a: 1});
});

app.listen(port, () => {
  console.log('Project started on port ' + port);
});
