// Declare the constants and require the modules
const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")
// Enable mustache engines
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
// Setting the home page
app.get("/", function(request, response) {
  response.render('index', {
    robots: data.users
  })
})
// Setting the user page
app.get("/users/:id", function(request, response) {
  const robNumber = parseInt(request.params.id)
  let user = false;
  let jobStatus;
  for (var i = 0; i < data.users.length; i++) { // Parsing through the for loop to make the site go to individual users
    if (data.users[i].id === robNumber) {
      user = data.users[i]
    }
  }
  // Send the info to the users page
  response.render('users', {
    user: user
  })
})
// Let terminal know we are running the node
app.listen(3000, function() {
  console.log("Express started on port 3000")
})
