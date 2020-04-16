const path = require("path");
const hbs = require("hbs");
//It returns a function and not an object
const express = require("express");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//This is the line that defines the server
const app = express();

//__dirname contains the path to the directory containing the file
//path.join() is used to join path so that u can get to the folder/file u want
//to reach from the given file
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewPath = path.join(__dirname, "../templates/views");

//Used to set value for a given express setting
//It takes 2 values in the form of key value pair
app.set("view engine", "hbs");
app.set("views", viewPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  //Render() is used to send views/dynamic pages
  //first argument is view to be rendered
  //Second view is the object that is dynamic data to be used in the page
  res.render("index", {
    title: "Weather App",
    name: "Hardik Gaur",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Hardik Gaur",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is help page",
    title: "Help",
    name: "Hardik Gaur",
  });
});

//handler function that returns something depending upon the url that is requested
//First argument is the url that it will handle ; Second is teh call back function
//deciding what to do when the url is called
app.get("/weather", (req, res) => {
  if (!req.query.address)
    return res.send({ error: "Please provide an address" });
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error)
        return res.send({
          error,
        });
      forecast(latitude, longitude, (error, forecastData) => {
        if (error)
          return res.send({
            error,
          });
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404",
    message: "Help article not found",
    name: "Hardik Gaur",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    message: "Page not found",
    name: "Hardik Gaur",
  });
});

//Function that listens to the upcoming requests
//First argument is the port number that it listens to
//Second argument is a callback function that is executed and can be used to set up the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
