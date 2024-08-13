const express= require('express');
const mongoose=require('mongoose');
const bodyParser= require('body-Parser');
const displayNameRoutes=require('./routes/displayNameRoutes');
const discussionRoutes= require('./routes/discussionRoutes');
const announcementRoutes=require('./routes/announcementRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/display-name',displayNameRoutes);
app.use('/api/announcement',announcementRoutes);

mongoose.connect('mongodb://localhost:27017/myWebApp',{
    useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=> console.log('MongoDBconnected...'))
.catch(err=>console.log(err));
module.exports=app;