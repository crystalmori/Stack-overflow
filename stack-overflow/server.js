const express       = require('express'),
      dbOperation   = require('./dbFiles/dbOperation'),
      cors          = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// app.get('/home', function(req, res) {
//     console.log('Called');
//     res.send({result: 'Welcome Home'})
// });

// app.get('/notfound', function(req, res) {
//     console.log('Called NotFound');
//     res.send({result: 'Not Found'})
// })

// dbOperation.getComments().then(res => {
//     console.log(res);
// })

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));