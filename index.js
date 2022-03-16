const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRoutes');
const postRoutes = require('./routers/postRoutes');
const categoriesRoutes = require('./routers/categorieRoutes');
const email = require('./utils/email');
const bodyParser= require('body-parser')
const multer = require('multer');
app.use(express.json());
//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({extended: true}))

// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, 'hello.jpg')
    }
  })
const  upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req,res) => {
    res.status(200).json('Upload file successfully!');
})
mongoose.connect(process.env. MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to database!")
}).catch(err => {console.log(err)})


//MOUNT ROUTING
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/categories', categoriesRoutes)
////SERVER START
app.listen(5000, () => {
    console.log("Backend is running!");
})