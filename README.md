# Rick n Morty Demo
This is a small front end demo application for educational purposes. There is a home page which you can use to navigate to either:
- A character list page (fully implemented)
- A location list page (not implemented)

## Character List
The character list page displays the first 5 characters from the Rick n Morty universe:
1. Rick Sanchez
2. Morty Smith
3. Summer Smith
4. Beth Smith
5. Jerry Smith

Each character card features an image, character name, species, and status, as well as a button to navigate to a  character details page to view more info about the selected character.

## Character Details
The character details page displays the details of a single character from the Rick n Morty universe. The page reads the character's ID from the query string in the URL. The character's image, name, species, status, location, and origin details are displayed on this page.

## Core Concepts Covered
- `.fetch()`: to retrieve remote data from an API.
- ES7 `async` and `await` syntax to deal with asynchronous code.
- Work with more complex JSON data structures (nested objects).
- Separate between the logical concerns of displaying a list of objects vs a single object.
- Dynamically render data on the UI that comes from an API.
- Create a multi-page application.

## Credits
We used the free and public [Rick n Morty API](https://rickandmortyapi.com/).