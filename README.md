# MOVIE_APP

This Mobile Application is a fully functional & responsive movie app developed using React Native and using moviedb api. 
In this project you can browse trending, upcoming and top rated movies, you can see the details of a movie and the cast person, and you can even search any movie you want plus many more cool features. 

Here's a breakdown of the project structure and its components:

`App Component (App.js):`

This is the entry point of the application.
It imports the Navigation component from './src/navigation/navigation' and renders it.

`Navigation Component (navigation.js):`

This component handles navigation within the application using React Navigation.
It defines a stack navigator with screens for HomeScreen, MovieDetail, PersonScreen, and SearchScreen.
Each screen is associated with a corresponding component imported from '../screens'.

`MovieDetail Component (MovieDetail.js):`

This component displays details about a specific movie.
It fetches movie details, credits, and similar movies from the Movie Database API.
Displays movie poster, title, status, release date, runtime, genres, overview, cast, and similar movies.

`HomeScreen Component (HomeScreen.js):`

This component serves as the home screen of the application.
It fetches trending, upcoming, and top-rated movies from the Movie Database API.
Displays trending movies in a carousel, upcoming movies, and top-rated movies in separate sections.

`PersonScreen Component (PersonScreen.js):`

This component displays details about a specific person (e.g., actor or actress).
It fetches person details and movies associated with that person from the Movie Database API.
Displays person's name, profile picture, birthplace, gender, birthday, known for department, popularity, biography, and movies they appeared in.

`SearchScreen Component (SearchScreen.js):`

This component allows users to search for movies.
It fetches search results from the Movie Database API based on the user's query.
Displays search results with movie posters and titles.

`Additional Components:`

 - Cast Component (Cast.js): Displays the top cast of a movie.
 - Loading Component (Loading.js): Displays a loading spinner while   
data is being fetched.
 - MovieList Component (MovieList.js): Displays a list of movies in a horizontal scrollable view.
 - TrendingMovies Component (TrendingMovies.js): Displays trending movies in a carousel.

![](movie.gif)