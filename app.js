const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))

app.get("/", function(request, response) {
  response.render('index', {
    robots: data.users
  })

})
app.listen(3000, function() {
  console.log("Express started on port 3000")
})
