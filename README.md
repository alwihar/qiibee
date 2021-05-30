# Getting started with qiibee test application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory run following script to start the app:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# About the project

### Login Page
When opening the webpage, user sees the Login page.
In that page with the help of the switch the user can choose to log in either as a customer or a brand.

### Register Page
If the user is not yet signed up, they can go to the Register page.
Again with the help of the switch the user can choose between customer and brand.
When registering, user is taken to the Login page, where they can fill the credentials and finally log in to the app.

## Logged in as a customer
When logging in as a customer, the user sees a table of registered brands.
The user can see the information about the brands, follow or unfollow them.
By clicking on the name of the brand, the user is taken to the Brand Page.

### Brand Page
On Brand page the user can see the information about the selected brand, as well as the points that they were given by that brand - customer points.
By clicking on the button the user can redeem the points they have.

## Logged in as a brand
When logging in as a brand, the user can see a table of the customers that follow its brand.
In that table there is an information about the customers, as well as a '+' button.
By clicking on that button the user can add points to the selected customer as long as its points are enough.
The brands points are given when registering the brand.

### Log out
To log out from the application, there is a log out button in the right corner of the header.