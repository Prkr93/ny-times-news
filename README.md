# NY Times News

NY Times News is an app designed to keep you up to date with the latest top stories from NY Times' Top Stories API.

Users are able to toggle the navigation menu and select from a list of subjects they would like news about. The app will fetch those desired news articles and display them to the user, where the user can click on a single article to see more details about it.

![Screen Shot 2022-06-10 at 1 36 31 PM](https://user-images.githubusercontent.com/90285348/173138017-38a662da-e1e7-4899-baf8-4323d6a4bed9.png)

![Screen Shot 2022-06-10 at 1 36 47 PM](https://user-images.githubusercontent.com/90285348/173138008-e7820248-f6c1-441f-a08a-6e707ef230d6.png)

## Challenges/Wins
- Was able to make a dynamic fetch call in order to fetch from multiple endpoints.
- Reusable component structure and fully responsive design.

## Component Architecture
- App
  - Menu
  - Articles
    - HighlightedArticle

## Skills/Practices
- React
- HTML/JS/CSS
- Responsive Design
- OOP
- Dynamic Programming


## Dynamic Endpoint
- `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
- Section can be a list of any of the provided NY Times' Top Stories API endpoints.
  - arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world

### Planned Additions
- Add a header and footer, and ensure proper branding.
- Add E2E testing to ensure proper error handling.
- Add in error handling for a 429 error (too many requests).
- Add some finishing styling.
- Deploy through Surge or Heroku.
- Given more time, I would have like to setup and utilize a project board and wireframe more effectively.

### Setup Instructions
- `git clone` this repo to your machine.
- Run `npm i` to install dependencies.
- Run `npm start` to start the server.
- The site can then be view at http://localhost:3000.
