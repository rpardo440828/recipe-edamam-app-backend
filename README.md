# Project Title

Recipe Search Site

# Project Description

This project guides the user to search for food recipes based off of different parameters. The recipe data is from Edamam`s recipe API. The site displays up to 20 random results at a time.
The project also provides login capabilities with user information being stored in a MySQL database. The website is responsive and resizes based on screen size.

# Tech Used

- Deployment
  - Heroku (Backend and MySQL Database)
  - Netlify (Frontend)

- Backend
  - Node JS
  - Cookie Parser
  - Json Web Token
  - Cors
  - MySQL

 - Frontend
     - React JS
     - React Router Dom
     - Axios
     - JavaScript
     - Tailwind CSS
     - Edamam Recipe API

# API Limitations

The pay plan I was able to select unfortunately does not allow the cooking instructions to be sent to my website. It also has a limit of requests per minute that may cause some down time if it is reached.
Most of the recipes give a source for it, so when the user clicks an individual recipe they can click the source that will lead them to the cooking instructions

# User Instructions

Once the home page is loaded the user can either register, login, or view the recipe search system. Currently Logging in does not provide any new features. However, in the future a saving system will be implemented for the user to save recipes that they like.
While in the Recipes view the user is prompted to search for recipes. They can search by keyword, cuisine type, allergy labels , and diet labels. Then they will have 20 random results to look at, and the user may search the same results again to search for 20 random results. Once the user clicks a recipe to view, the website will display information on the recipe including nutrition facts, health labels, ingredients, etc.

