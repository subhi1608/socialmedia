const express       = require('express');
const app           = express();
const PORT          = 5000;
const mongoose      = require('mongoose');
const config        = require('config');
const morgan        = require('morgan');
const helmet        = require('helmet')
const cookieSession = require('cookie-session');
const passport      = require('passport')
const cors          = require('cors')
const userRoute     = require('./routes/user')
const authRoute     = require('./routes/auth')
const googleauth    = require('./routes/google-auth')
const postRoute     = require('./routes/posts')

// const dbConfig = config.get('Buzzz.dbConfig.dbName');

const dbUser = mongoose.connect('mongodb://localhost:27017/socialbuzzz',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('connected to database');
})
// middleware
app.use(cookieSession({
    name:'buzz-session',
    keys:['key1','key2']
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use('/',googleauth)
app.use('/user',userRoute)
app.use('/auth',authRoute)
app.use('/post',postRoute)

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})
