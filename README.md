# Movie List

https://movie-list-semih.netlify.app/

A React, TypeScript, and Redux Observable-powered SPA for browsing and searching movies, series, and episodes via the OMDb API.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movie-list.git
cd movie-list
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDb API key:

```
REACT_APP_OMDB_API_KEY=ce1ffa69
```

### Running the Application

4. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

## Features

- Search for movies, TV shows, and episodes by title
- Filter results by media type (movie, series, or episode)
- Filter by release year
- Pagination for browsing through results
- Detailed view for individual movies/shows including:
  - Title, year, runtime, rating
  - Plot summary
  - Cast and crew information
  - IMDb ratings
  - Additional metadata
- Unit Tests: Comprehensive test suite for components, reducers, and utilities

## Technology Stack

- **React**: UI library
- **TypeScript**: Type safety and better developer experience
- **Redux & Redux Observables (RxJS)**: State management with reactive programming
- **React Router**: Navigation and routing
- **SCSS Modules**: Component-scoped styling
- **Material UI**: UI components and styling system
- **Axios**: API requests
- **Lodash**: Utility functions
- **Test**: Jest & Testing Library: Unit and integration testing

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- OMDb API Key

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production to the `build` folder
