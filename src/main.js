const app = require('./app')

const PORT = 5005

app.listen(PORT, (res, req) => {
  console.log('Listen')
})

app.get('/', (req, res) => {
  console.log('/')
  res.send({
    test: 'test',
  })
})
