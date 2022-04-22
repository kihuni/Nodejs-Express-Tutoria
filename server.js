// Using Node 
// const http = require('http')

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2022-05-30T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2022-05-30T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2022-05-30T19:20:14.298Z",
//       important: true
//     }
//   ]

// const app = http.createServer((req, res) =>{
//     res.writeHead(200,{'Content-Type': 'application/json'})
//     res.end(JSON.stringify(notes))
// })

// const PORT = 3001

// app.listen(PORT)

// console.log(`Server is listening on ${PORT}`)


//using Express

const express = require('express')

const app = express()

//body parser
app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]

// app.get('/', (req,res)=>{
//   res.send('my first server using express')
// })

//route that handles get request

app.get('/api/notes/:id', (req, res)=>{

//  // testing every step of the route process using console.log
//   const id =  Number(req.params.id)
//   console.log(id)

//   const note = notes.find(note => {
//     console.log(note.id, typeof note.id, id, typeof id, note.id === id)

//     return note.id === id
//   })
  
//  console.log(note)
//   //matched request returned to the sender
//   res.json(note)

const id = Number(req.params.id)

const note = notes.find(note => note.id === id)

if(note){
  res.json(note)
}else{
  res.status(404).end()
}
})

// route for handling delete request

app.delete('/api/notes/:id', (req, res) =>{
  const id = Number(req.params.id)

 notes = notes.filter(note => note.id !== id)

  res.status(204).end()
})


//route for handling post request
app.post('/api/notes', (req, res) =>{
  const note = req.body
  console.log(note)

  res.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
