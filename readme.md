# Shakerr.io

## Overview

Shakerr.io is a web application that serves recipes for beverages and allows registered users to create, read, update, and delete their own custom beverage recipes. It pulls data from [TheCocktailDB API.](https://www.thecocktaildb.com/api.php)

**LIVE LINK:** http://shakerr.io

## Features

- All users can search for cocktails in the external database by name or ingredient.
- Registered users can create, read, update, and delete their own custom beverage recipes.
- Cocktail images are displayed in a beautiful, responsive UI for a smooth user experience across all devices.

## Tech

Shakerr.io was built using React and Bootstrap for the front-end with MongoDB and Express for the back-end. Stock recipes were sourced via the API from [TheCocktailDB](https://www.thecocktaildb.com/api.php).

The initial [wireframe](https://drive.google.com/file/d/1fPPMtBHEJ5juKwZ6rWt3JP77LGlvljh0/view?usp=sharing) was built using Balsamiq.

## Dependencies
- React
- Express
- Mongoose
- jsonwebtoken
- cookie-parser
- bcrypt
- cors
- dotenv

## Running shakerr.io locally
1. Clone the repo
2. Under `/client`, run `npm install` then `npm start`
3. Under `/server`, run `node server.js`

## To-Do
- Add ability for users to create collections, e.g. favorites.
- Implement pagination in Browse All and Search Results.
- Add multi-ingredient search.
- Add ability for users to select personal barstock and view which cocktails they are able to make with their current ingredients.

