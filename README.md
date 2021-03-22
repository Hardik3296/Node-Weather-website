# Node-Weather-website

This project creates an application that fetches and displays the weather in a region depending upon the user input. The bakcend of the application is built using node.js, while the frontend 
part of it is served using handlebars for creating simple pages to be displayed. This project uses the following packages and technologies:

[hbs](https://www.npmjs.com/package/handlebars) - This package is used to create views for the pages to be rendered by server. Here it has been used to create views for the pages to 
be displayed to the user.

[request](https://www.npmjs.com/package/request) - This package is used to make calls to fetch data from other APIs. Here it has been used to make calls to the weather API service inorder to fetch the 
weather details for that region. Also it has been used to fetch the langitutde and latitutde coordinates for the place the user inputs.

[express](https://www.npmjs.com/package/express) - A very popular package to set up API routing and handling in node.js backend applications. Provides myriad functionalities including middleware to perform necesary operations on the received data. 
Here it has been used to setup API routes for the application.

The project uses [Geocode Mapbox API](https://docs.mapbox.com/api/search/geocoding/) for fetching the coordinates of a place enterd by the user as input. It also uses 
[WeatherStack API](https://weatherstack.com/documentation) to fetch the weather details for the given coordinates as fetched by the MapBox API. Both of these APIs require a user account 
on their respective websites and API keys to make the requests.

### Running the code
1) Clone the repository
2) Create the **API keys** for **MapBox API** and **WeatherStack API**.
3) Run **npm install** to install the dependencies.
4) Run **npm start** to start the server

Please feel free to drop any suggestions at hardikgaur@geu.ac.in.
