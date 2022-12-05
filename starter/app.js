//Express server
const express = require('express');
const { route } = require('./routes/tasks');
const app = express();
const tasks = require('./routes/tasks')


//middleware
app.use(express.json())

//Routes
app.get('/hello', (req, res) => {
    res.send('task man app');
})


//The route for THE TASKS.js route
app.use('/api/v1/tasks', tasks)





const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`))


