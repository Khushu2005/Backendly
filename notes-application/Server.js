let express = require('express');
let connectToDb = require('../notes-application/src/db/db')
let noteModel = require("../notes-application/src/models/note.model")

//Server created
let server = express();

// middleware
server.use(express.json());

//Db Connection
connectToDb()


// msg
server.get('/', (req, res) => {
    res.send('Welcome to the Notes Application');
})

// add note
server.post('/notes', async (req, res) => {

    const { title, content } = req.body
    console.log(req.body);


    await noteModel.create({
        title, content
    })

    res.json({
        message: "Note added Successfully! "
    })
})

// get all notes
server.get('/notes', async (req, res) => {
    const note = await noteModel.find()
    res.json({

        message: 'Notes Fetch Successfully',
        note

    })
})

// Delete notes
server.delete('/notes/:id', async (req, res) => {
    let id = req.params.id

    await noteModel.findByIdAndDelete({
        _id: id
    })
    res.json({
        message: "Note Deleted Successfully"
    })

})

// Update notes
server.patch('/notes/:id', async (req, res) => {
    let id = req.params.id
    const { title, content } = req.body
    await noteModel.findByIdAndUpdate({
        _id: id
    }, {
        title: title,
        content: content
    })

    res.json({
        message: "Note Updated Successfully"
    })
})

// Server Starting
server.listen(3000, () => {
    console.log('Server is running on port 3000');

})
