# ajax-books

This repo contains the same code in different branches to  demonstrate various strategies for managing global state with React.

To install:

    npm install

Seed the database with:

    npm run seed

The `redux` branch uses react-redux to manage global state to enable the display of total number of likes in the nav bar and individual book number of likes in the book's detail page.

The `context` branch does much the same, but uses the context API.

In the `redux` branch, all books are stored in the global store and managed there.  In the `context` branch, only the number of likes are managed globally.