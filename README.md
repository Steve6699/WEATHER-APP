# WEATHER-APP
This program is a weather web page, where the user searches for the city in which he wants to know the weather.

The website obtains weather information via API from openweathermap.org.
There are two main functions:
1- cheakWeather(city):
This function fetches weather information according to the city entered in the search from the site from which we obtain the data. It also checks if the city is invalid through a verification condition. If it is invalid, an error message appears to the user. If it is a valid city, the weather data box for that city appears.

Items HTML are fetched by document.querySelector Values are assigned to it according to its type, whether the name of the city, its temperature, wind speed, etc

As for the pictures, the site is first checked according to its information. If the weather is cloudy, the special picture is included, and for other different weather conditions, the picture is changed.

Of course, all of this can only be done by clicking on the search button after writing the name of the city, and the click is verified via "searchBtn.addEventListener"


team work:
abdulrahman abdullah alsmadi
Mustafa hashim Hussein Ibrahim
