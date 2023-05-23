//50% of this isnt really my code so make what you can of it
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Database = require("@replit/database");
const db = new Database();
db.list().then(keys => {});
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(db.getAll().then(response => console.log(response)))

app.get("/", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(username)) {
        res.render("loggedin.html", { username: username })
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("notloggedin.html");
  }
});


app.get("/login", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  if (loggedIn == "true") {
    res.redirect("/");
  } else {
    res.render("login.html");
  }
})

app.get("/signup", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  if (loggedIn == "true") {
    res.redirect("/");
  } else {
    res.render("signup.html");
  }
});

app.get("/api", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  if (loggedIn == "true") {
    res.render("api.html");
  } else {
    res.render("api.html");
  }
});

app.post("/loginsubmit", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  db.list().then(keys => {
    if (keys.includes(username)) {
      db.get(username).then(value => {
        if (password == value) {
          res.cookie("loggedIn", "true");
          res.cookie("username", username, {secure: true, expires: new Date(Date.now() + 3600000 * 3600000), sameSite: 'none' });
          console.log("logged in successfully: " + username)
          res.redirect("/");
        } else {
          res.send("Wrong password.");
        }
      });
    } else {
      res.status(500).send({ error_code: 'Unknown account.' })
    }
  });
});

app.post("/createaccount", (req, res) => {
  var newusername = req.body.newusername;
  newpassword = req.body.newpassword;
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  cap_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  allchars = letters + cap_letters + numbers + ['_'];
  goodusername = true;
  for (let i of newusername) {
    if (!allchars.includes(i)) {
      goodusername = false;
    }
  }
  if (goodusername) {
    db.list().then(keys => {
      if (keys.includes(newusername)) {
        res.send("Username taken.");
      } else if (newusername == "") {
        res.send("Please enter a username.");
      } else if (newpassword == "") {
        res.send("Please enter a password.")
      } else {
        db.set(newusername, newpassword).then(() => console.log("new account created " + "Account Username: " + newusername + " | " + "Account Password: " + newpassword));
        res.cookie("loggedIn", "true")
        res.cookie("username", newusername, {secure: true, expires: new Date(Date.now() + 3600000 * 3600000), sameSite: 'none' });
        res.redirect("/");
      }
    });
  } else {
    res.send("Username can only contain alphanumeric characters and underscores.")
  }
});

app.get("/logout", (req, res) => {
  res.cookie("loggedIn", "false");
  res.clearCookie("username");
  res.clearCookie("LoggedInReal");
  res.redirect("/");
  username = req.cookies.username;
  console.log("successfully logged out: " + username)
});

app.get("/daccount", (req, res) => {
    username = req.cookies.username;
    res.cookie("loggedIn", "false");
    res.clearCookie("username");
    res.clearCookie("LoggedInReal");
    res.redirect("/");
    db.delete(username).then(() => {});
    console.log("Deleted Account: " + username);
  
});

app.listen(3000, () => {
  console.log("server started");
  console.log(process.env.REPLIT_DB_URL)
})


