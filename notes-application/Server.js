let express = require('express');
let server = express();

server.use(express.json());

let notes = [];

// msg
server.get('/', (req, res) => {
    res.send('Welcome to the Notes Application');
})

// add note
server.post('/notes', (req, res) => {
    notes.push(req.body);
    res.json({
        message: 'Note added successfully',

    })

})

// get all notes
server.get('/notes', (req, res) => {
    res.json(notes);
})

// delete note
server.delete('/notes/:index', (req, res) => {
    let index = req.params.index;
    delete notes[index];

    res.json({
        message: 'Note deleted successfully'
    })
})

// update note
server.patch('/notes/:index', (req, res) => {
    let index = req.params.index;
    let title = req.body.title;
    let description = req.body.description;

    notes[index].title = title;
    notes[index].description = description;

    res.json({
        message: 'Note updated successfully'
    })

})

server.listen(3000, () => {
    console.log('Server is running on port 3000');

})
