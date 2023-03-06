import { express } from 'express'

const app = express()
const router = express.Router()
app.use(express.json())

router.get('/', (req, res) => {
  res.send(
    'Welcome to the Job Application Tracker : An Easy way to manage your job applications'
  )
})
