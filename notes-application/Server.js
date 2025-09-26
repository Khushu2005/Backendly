let express = require('express');
let server = express();

server.use(express.json());

let notes = [];
server.post('/notes', (req, res) => {
    notes.push(req.body);
    res.json({
        message: 'Note added successfully',
        notes: notes
    })

})

server.listen(3000, () => {
    console.log('Server is running on port 3000');

})