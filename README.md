# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It's a sample project to use as many new things for me as I can.

## Backend

The backend is an AWS API gateway that delegates all routes to individual lambda functions. See the [/src/aws](/src/aws) folder to find out more.

## Resources

For unit testing, react-testing-library is used (out of the box configured with create-react-app). This is an awesome article keep having at hand: https://www.robinwieruch.de/react-testing-library

Also using [Mock Service Worker](https://mswjs.io/) to mock http requests.
