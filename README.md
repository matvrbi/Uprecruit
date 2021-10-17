# UpRecruit front-end test project

# Scenario
This application lists candidates and allows users to see details about a specific candidate.

### User Stories
1. As a user I should see a loading indicator whenever data is being retrieved
2. As a user I should see a list of candidates (first name only) when I visit the root of the application (/)
3. As a user I should be able to click on a candidate and be navigated to a detail page for that specific candidate
4. As a user I should see first name, last name and id when I see a candidate's details
5. As a user I should be able to navigate to the detail page directly through URL

### Requirements
1. This project is configured to use the vuetifyjs.com library of pre-built components, try to leverage this as much as possible

### Bonus tasks
1. Add client side filtering on the list
2. Try to find a way to minimize the amount of bandwidth needed when navigating between the list and details page
3. Try to make the list component configurable (e.g.: allow for different font styles, or colors)
4. Create a component which takes a candidate object as a property and displays an avatar of the first and last name initials
5. Add sorting to the list of candidates page

### Hints
Try to build components for repeatable items
Look in to Vuex for state persistance

## How to get started

- run npm install in application folder
- run npm serve
- visit local server (http://localhost:8080 by default)