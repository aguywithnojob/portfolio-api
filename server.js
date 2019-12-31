const express = require('express');
const bodyParser = require('body-parser');

const projects = require('./routes/project');
const skills = require('./routes/skill');
const personal = require('./routes/personal');
const experience = require('./routes/experience');
const education = require('./routes/education');


const app = express();

const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://root:CbTlExKsiYnE6LTM@cluster0-z0dpa.mongodb.net/portfolio').then(()=>{
    console.log('database connected')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/projects',projects);
app.use('/skills',skills);
app.use('/personal',personal);
app.use('/experience',experience);
app.use('/education',education);

app.listen(3000,()=> console.log('server start at 3000'));



// CbTlExKsiYnE6LTM