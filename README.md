# Book Rev

**Book Rev** is a simple web application that allows users to manage a collection of books. Users can view existing books, add new ones, and delete books from the collection.

## Features

- **View Books**: Display a collection of books with details including title, author, and description.
- **Add Books**: Use a popup form to add new books to the collection dynamically.
- **Delete Books**: Remove books from the collection with a click of a button.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the webpage, including layout and design.
- **JavaScript**: Functionality for adding and removing books, as well as handling the popup form.

## Project Structure
├── index.html # Main HTML file ├── index.css # CSS styles ├── index.js # JavaScript for functionality ├── FaviFolder/ │ └── book logo.jpg # Favicon for the application └──


## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Use the `+` button at the bottom-right corner to add a new book:
   - Enter the book title, author, and a short description.
   - Click "ADD" to add the book to the collection.
   - Click "CANCEL" to close the popup without adding a book.
4. Click the "Delete" button on a book to remove it from the collection.

## Features in Code

- **Popup Form**:
  - The popup is triggered by clicking the `+` button.
  - Form inputs for title, author, and description are validated and then used to create new book entries.
- **Dynamic Book Addition**:
  - New book entries are created dynamically using JavaScript's DOM manipulation.
- **Book Deletion**:
  - Each book has a "Delete" button that removes it from the DOM.

## Styling Details

- **Navbar**: Stylish and responsive with a red background.
- **Book Cards**: Individual containers for books with hover effects.
- **Popup**: Centered, with an overlay for better focus.

## Future Enhancements

- Implement a backend with Node.js and PostgreSQL for persistent storage.
- Add a search and filter functionality.
- Improve responsiveness for mobile devices.
