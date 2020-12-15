let express = require('express'); // Express web server framework
let app = express();
app.use(express.static(__dirname + '/public'));
console.log('Listening on 1000');
app.listen(1000);
