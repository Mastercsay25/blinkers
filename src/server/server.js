require("./config/config");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose.js");
const { User } = require("./models/user");
const { authenticate } = require("./middleware/authenticate");

const app = express();
const publicPath = path.join(__dirname, "..", "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });

app.listen(port, () => {
  console.log("Server is up and running!");
  console.log(`Listening at port ${port}.`)
});

// POST /users - Makes a new user
app.post("/users", (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header("x-auth", token).send(user);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

// POST /users/login - Logs in
app.post("/users/login", (req, res) => {
  const { email, password } = req.body;

  User.findByCredentials(email, password).then((user) => {
    user.generateAuthToken().then((token) => {
      res.header("x-auth", token).send(user);
    });
  }).catch((err) => {
    res.status(400).send(err);
  })
});

// GET /users/me - Sends current user's information
app.get("/users/me", authenticate, (req, res) => {
  res.status(200).send(req.user);
});

// DELETE /users/me/token - Removes JWT
app.delete("/users/me/token", authenticate, (req, res) => {
  req.user.removeToken(req.body.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  })
});

// GET /books/:id - Gets a book from the db 
app.get("/books/:id", (req, res) => {
  
});


// // GET /wishlist - Gets all books on the wishlist
app.get("/wishlist", authenticate, (req, res) => {
});

// // POST /wishlist - Adds book to wishlist
app.post("/wishlist", authenticate, (req, res) => {
});

// // DELETE /wishlist/:bookId - Removes a book from the wishlist
app.delete("/wishlist/:bookId", authenticate,  (req, res) => {
});

// // POST /cart - Adds book to shopping cart
app.post("/cart", authenticate, (req, res) => {
});

// // DELETE /cart/:bookId - Removes a book from the shopping cart
app.delete("/cart/:bookId", authenticate, (req, res) => {
});

// // GET /bookshelf - Gets all the books in the bookshelf
app.get("/bookshelf", authenticate, (req, res) => {
});

// // GET /bookshelf/:bookId - Gets a single book from the bookshelf
app.get("/bookshelf/:bookId", authenticate, (req, res) => {
});

// // GET /bookshelf/mode - Gets the viewing mode for the bookshelf
app.get("/bookshelf/mode", authenticate, (req, res) => {
});

// // POST /bookshelf - Adds book to bookshelf
app.post("/bookshelf", authenticate, (req, res) => {
});

// // POST /bookshelf/section - Adds a new section
app.post("/bookshelf/section", authenticate, (req, res) => {
});

// // DELETE /bookshelf/section/:section - Removes a section
app.delete("/bookshelf/section/:section", authenticate, (req, res) => {
});

// // GET /bookshelf/lend/:bookid/ - Get information about a lent book
app.get("/bookshelf/lend/:bookId", authenticate, (req, res) => {
});

// // PUT /bookshelf/lend/:bookId/:friendEmail - Lend a book to a friend
app.put("/bookshelf/:bookId/:friendEmail", authenticate, (req, res) => {
});

// // PUT /users/me/edit - Modify credentials
app.put("/users/me/edit", authenticate, (req, res) => {
});

// // POST /users/me/payment - Add a new payment method
app.post("/users/me/payment", (req, res) => {
});

// // DELETE /users/me/payment/:lastFour - Removes a payment method from the system
app.delete("/users/me/payment/:lastFour", (req, res) => {
});

// // GET /users/me/friends/ - Get list of friends
app.get("/users/me/friends", (req, res) => {
});

// // GET /users/me/friends/:friendEmail - Get information about a single friend
app.get("/users/me/friends/:friendEmail", (req, res) => {
});

// // POST /users/me/friends/ - Add a new friend
app.post("/users/me/friends/", (req, res) => {
});

// // DELETE /users/me/friends/:friendEmail - Remove a friend
app.delete("/users/me/friends/", (req, res) => {
});
