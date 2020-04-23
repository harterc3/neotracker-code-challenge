# Shipment Tracker

## Run the app
- From the project directory, run `yarn`
- From the project directory, run `yarn server`
- Using a new terminal, from the project directory, run `yarn start`

## Design Decisions

- I used a **directory structure** consistent with work I've done in the past
  - **api** contains all the files that interact with the web API. Since we're only using the API for shipment data, we only have `shipments.api.js`.
  - **components** contains all generic components that can be used across the entire app. Usually these components have details and examples in some kind of styleguide.
  - **pages** contains the different pages in our app. Each `*Page` folder contains the React component for the page as well as a **components** folder with any page-specific components.
  - **styles** contains css values for things like Fonts, Colors, etc. It's good practice to use the constant values defined here when styling components rather than manually entering in style values for every single component. (I also didn't make full use of this due to the time constraint)
  - **util** contains helper functions that are generic and could be used from aywhere in the app. Currently the only thing in here is a copy of the `debounce` function from the lodash library.

- I did not include any automated testing for the sorting/filtering logic because the `json-server` library has functionality built-in for both.

## Given More Time, I Would..

- **Create an ApiResponseHandler class** to correctly handle failed ajax calls. I took a naive approach assuming that all of our calls would succeed but a failure should show a user-friendly error message as well as log an event to our error tracking service.

- **Set up a DEBUG environment variable** that when enabled would execute logging statements around error-prone and informational pieces of code such as API calls, etc.

- **Figure out how to set up a framework for responsive design** to make responsive UI creation uniform across the app. I've done this before by setting up a `MediaQuery.js` file in the `styles` folder that can then be used in my styled component definitions.

- **Clean up the design in general** because it isn't as pretty as I'd like it to be.

# NEO Tracker Coding Challenge

**Your goal is to set up the front-end UI for an application which enables the user to view and manage shipments. The main goal is for the user to check shipments at a glance. This allows users to make faster decisions and plan ahead of time.**

# Use cases

- The user should be able to:
  - See shipments in pages of 20 elements per page
  - Search by shipment id
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - Be able to filter shipments by different criteria, like destination, cargo, etc. (open-ended)
  - View the shipment information on a separate shipment details page
  - Update the shipment name (should persist when the page is reloaded)

The interactions should not refresh the page.

# Evaluation Criteria

## Must Have

- Use React/JS. You can use any libraries you'd like
- The application must start
- The application must be divided into components
- The file structure must be consistent and easy to follow
- Must cover all [use cases](README.md#use-cases) with minor issues
- Tests written and passing for functions used to sort and filter shipments (ie. not testing the UI display but the utility functions)

## Nice to Have

- TypeScript is used (and don't use "any" types)
- Use [Styled Components](https://styled-components.com/) for styling
- Use React Hooks where possible
- The application is configurable by environment variables
- The application has a development and production environment
- The application has good naming
- The application computes values
- The application is responsive
- Use higher order functions (e.g. map, filter, reduce) and immutable variables

## Negatives

- No componentization
- No modularization
- Inline styles
- No control over re-rendering (e.g. not using id for a list)
- Bad naming
- Direct DOM manipulation

# How to submit

- Clone this repository
- Complete your project as described above within your local repository
- Make sure that there are scripts to start both the server and the client
- Push your changes to your GitHub and send us a link to the repo

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

- `yarn install` or `npm install`
- `yarn server` or `npm run server`

See [json-server](https://github.com/typicode/json-server) for more information.

# Time limit

1 week from the time we send you the test should be sufficient to fulfill a lot of the above requirements. Our advice is to focus on making sure that the application works properly and fulfills the "must-haves" [above](README.md#must-have) before moving on to secondary objectives. Happy coding!
