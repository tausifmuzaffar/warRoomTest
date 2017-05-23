var express = require('express');
var app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
  const index = path.join(__dirname,'public','index.html');
  res.sendFile(index);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


