// import express from 'express';

// const app = express();
// app.use(express.static('dist/index.html'))

// app.listen(8080);

import express from 'express'
const app = express()
const PORT = 8080

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))