const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const express = require('express')
const app = express()


app.use('/payment', express.static('origin'))
// app.get('/payment',(req,res)=>{
//   res.send('<h1>hey</h1>')
// })
const jwt = require('jsonwebtoken')
const AUTH_JWT_SECRET = 'TOP-SECRET'
const AUTH_JWT_OPTIONS = { expiresIn: 2*600 }

// Load DB file for Authentication middleware and endpoints
const DB = JSON.parse(fs.readFileSync(path.join(__dirname, './db.json'), 'utf-8'))

// Authorization Middleware
server.use((req, res, next) => {
  const protections = DB.protection || {}
  const entity = req.url.split('/')[1]
  const entityProtection = protections[entity]
  const methodSpecificProtection = protections[entity+'.'+req.method.toLowerCase()]
  const protectionRule = methodSpecificProtection === false ? false : (methodSpecificProtection || entityProtection)

  const token = req.headers.token || req.headers.Token
  if (protectionRule && !token) return res.status(401).send()
  if (!token) return next()

  jwt.verify(token, AUTH_JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).send(err.name === 'TokenExpiredError' ? 'Token Expired!' : 'Invalid Token!')
    req.user = decoded
    if (!protectionRule) return next() // no authorization is needed
    const authorized = protectionRule === true || protectionRule === decoded.role
    if (!authorized) return res.status(401).send()
    next() // authorized
  })
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// general upload API (for test)
server.post('/upload', upload.single('image'), function (req, res, next) {
  // req.file is the `image` file
  // req.body will hold the text fields, if there were any
  res.json(req.file)
})

// list all files API (for test)
server.get('/files', (req, res, next) => {
  fs.readdir('./uploads/', (err, files) => {
    if (err) return next(err)
    res.json(files)
  })
})

// download (preview) a file API
server.get('/files/:file_id', (req, res, next) => {
  const { file_id } = req.params
  res.set('Content-Type', 'image/jpeg')
  res.sendFile(path.join(__dirname, 'uploads/'+file_id))
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)


// For all non-json POST and PATCH requests (create and edit endpoints using an image file)
// 1- Upload the file inside the `image` field
// 2- (do it in next middleware)
const imageFieldUploadMiddleware = upload.single('image')

server.use((req, res, next) => {
  if ((req.method === 'POST' ||  req.method === 'PATCH') && req.headers['content-type'] != 'application/json') {
    imageFieldUploadMiddleware(req, res, next)
  } else {
    next()
  }
})


// If previous middle-ware worked, continue to next step
// 1- (previous middle-ware already did first step)
// 2- Validate uploaded file, and replace the `image` field value with the file path
server.use((req, res, next) => {
  // if there was a file uploaded and previous middleware worked:
  //   req.file is the `image` file
  //   req.body will hold the text fields, if there were any
  if (req.file) {
    const { mimetype, size, filename } = req.file

    // validate uploaded image
    if (mimetype != 'image/jpeg') throw new Error('image should be in image/jpeg type')
    if (size > 2*1024*1024) throw new Error('image size should be less than 2MB')
    
    // Replace image field value with the file's path
    req.body.image = '/files/'+filename
  }
  // continue to normal json-server router for actual creation
  next()
})


// Add createdAt field with timestamp value when posting to any route
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Authentication Routes
server.post([
  '/auth/login',
  '/auth/refresh-token',
  ], function (req, res, next) {
  if (req.url === '/auth/login') {
    const { username, password } = req.body
    req.user = (DB.users || {}).find(u => u.username == username && u.password == password)
    if (!req.user) return res.status(400).send('No user with those credentials!')
  }
  if (req.url === '/auth/refresh-token'){
    if (!req.user) return res.status(400).send('Token Required!')
  }
  const { username, role, name } = req.user
  jwt.sign({username, role, name}, AUTH_JWT_SECRET, AUTH_JWT_OPTIONS, (err, token) => {
    if (err) return next(error)
    res.json({token})
  })
})

// Use default router (CRUDs of db.json)
server.use(router)

// add express server for serving html on other origin
app.listen(3050, () => {
  console.log('Express is running at http://localhost:3050')
})

server.listen(3001, () => {
  console.log('Customized JSON-Server is running at http://localhost:3001/')
})