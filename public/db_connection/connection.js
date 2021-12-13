const moongose = require('mongoose')

const password = '73IZn1zWJT72SXkt';
const uri = 'mongodb+srv://making:'+ password +'@first.7ydvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityb0';
module.exports = ()=> moongose.connect(uri, {userNewUrlParser : true, useUnifiedTopology: true})