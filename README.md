<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

# FitnessApp

Application to monitor calories eaten and physical activity. In this respository you can find frontend part of application.

# Features

**Menu** - Menu enables navigation between tabs like: Overview, My Diary, My goals, My weights, Log out.

**Meals** - To access this feature you will have to go to My Dairy > Meals in the menu. You can:

- See history of eaten products - there is separate table for each meal (breakfast, dinner, lunch, supper and snacks). To change date you can use datepicker which is located at the top of the page.

- Add product to meal - to add product to meal you must click button 'ADD PRODUCT' and start writing name of desired product. Search engine will start searching when you will type 3 characters. If product is in database you will see prompts. When you will choose product you will see calories in product portion. You can change weight of product and calories will be recalculated. When you will click 'SAVE' button, product will be added to the meal.

Note: now database isn't completely filled with products. If you want check this feature search products by these names: 'egg', 'carrot'.

- Delete product from meal - you can delete product from meal. To do this you must click dumpster icon and confirm that you want delete this product from meal.

# Used technologies

- React
- Redux Toolkit
- TypeScript
- CSS
- MaterialUI
- Jest
- React Testing Library
- Docker

# How to run

Clone the repository, go to the `my-app` folder and run `npm start` command. In other gitbash window go to the `docker` folder and run `docker-compose up`.
