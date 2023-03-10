import express from 'express'
import path from 'path'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const __dirname = path.resolve();

app.use("/", express.static(path.join(__dirname,    './web/build')))
app.use("*", express.static(path.join(__dirname,    './web/build')))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})