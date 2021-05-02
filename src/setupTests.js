// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// No more time will be needed in successful tests
jest.setTimeout(200);

//
// The next snippet is taken from https://mswjs.io/docs/getting-started/integrate/node to setup the mock service worker
//
// src/setupTests.js
import { server } from './mocks/server.js';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
