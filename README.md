<p>
  <a target="_blank" rel="noopener noreferrer" href="https://gracious-bohr-9bcc0b.netlify.app">Click here for live demo</a>
</p>
<p align="center">
<a target="_blank" rel="noopener noreferrer" href="https://github.com/blakebdavies/portfolio-project/blob/main/images/react-weather-app.png">
   <img src="https://github.com/blakebdavies/portfolio-project/blob/main/images/react-weather-app.png?raw=true" width="600" style="max-width:100%";/>
</a>
   </p>                                                                                               
 <h2>React Weather App</h2>
 <p> This is a Reactjs project focused on creating a simple, user-friendly design with real-time weather search functionality.</p>
 <h2> Installation and Set-up Instructions</h2>
 <p>Clone down this repository you will need <code>node</code> and <code>npm</code> installed globally on your machine.</p>
 <h5>Installation</h5>
 <p><code>npm install</code></p>
 <h5>To Start Server</h5>
 <p><code>npm start</code></p>
 <h2> Reflection</h2>
 <ul>
  <li>API Integration</li>
  <li>Temperature Conversion</li>
  <li>Daily Forecast</li>
  <li>React Components</li>
  <li>React Loops</li>
  <li>Use Effect</li>
  </ul>
  <p>This was my first React project and I learned so much by building each section. My end goal of this project was to create a fully functional worldwide weather checker that allows you to search a city and see the weather in real-time as well as the 5-day forecast. I also wanted to build on my skillset by creating a temperature conversion that will change the forecasted temperature to either ºC or ºF.</p>
  
<p>I divided this project in two phases. The first phase was creating the weather search by integrating the OpenWeatherMap API and returning the real-time, current weather of a chosen city, displaying both imperial and metric temperatures as well as the weather description, humidity, and wind speed.The main challenge of this phase was deciding when to create different components as to not over complicate a component.</p>
<p>The second phase was dedicated to creating the daily forecast by building the layout, styling the feature, and integrating the API with the interface to display the data on the app, making sure it looks good for different scenarios. In this phase, I learned to loop through the numbers array using the JavaScript map() function to take care of rendering the daily forecast for the consecutive dates in order to avoid repetitive code. I also learned the importance of ensuring that a function must return something at all times, even if it is <code>null</code>. The main challenge of building the forecast feature was to ensure that the weather data displayed each day would update when the weather data of the parent component changed due to coordinates of a new city search. To accomplish this, I learned to incorporate a { Use Effect } which allows you to run code after the component is changed and loaded.</p>
<p>I also decided to build a feature that would display the current day and time of the city that you search. This was important to me because I find it helpful feature for those traveling to new destinations or for those with friends/family in other parts of the world.</p>
<p>I am very pleased with the end result of the application, however I would improve it further by choosing a more sophisticated API that would display the weather of every city and country. I found the OpenWeatherMap API easy to use, but it was limited in its results without inputting exact coordinates. For example, if searching for "Rome", the API does not take into account multiple cities in the world named "Rome" and returns "Rome, USA" rather than "Rome, Italy" - which is why I decided to display the country name as well as the city name in the application.<p/>

