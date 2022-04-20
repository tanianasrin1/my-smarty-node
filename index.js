const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('hello from my auto smarty ki kllo jkouyff smart pant')
});

const users = [
    {id: 1, name: 'sabana', email: 'sabkjh@gmail.com'},
    {id: 2, name: 'sabana', email: 'sabkjh@gmail.com'},
    {id: 3, name: 'sarana', email: 'sabkjh@gmail.com'},
    {id: 4, name: 'sabana', email: 'sabkjh@gmail.com'},
    {id: 5, name: 'sabana', email: 'sabkjh@gmail.com'},
    {id: 6, name: 'sarana', email: 'sabkjh@gmail.com'},
    {id: 7, name: 'samana', email: 'sabkjh@gmail.com'},
   
]

app.get('/users', (req, res) =>{
    // console.log( 'query', req.query)
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched =  users.filter(user => user.name. toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
});

app.get ('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt (req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);

});

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port)
})