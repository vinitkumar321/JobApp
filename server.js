import userRouter from './api/route.user.js'
import express from 'express'

const __dirname =
  '/Users/vinitkumar/Desktop/Coding/javascript/jobApplicationManager'

const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/static_content'))
let port = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.render('server.ejs')
  console.log('Welcome to the Job Application Manager')
})

app.use('/api/v1/user', userRouter)

app.listen(port, err => {
  if (err) {
    console.log('Cannot listent to the port. ', err)
    return
  }
  console.log(`Listening to port ${port}....`)
})
