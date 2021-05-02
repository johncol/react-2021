import { setupServer } from 'msw/node';
import { TechItemsApiHandlers } from './tech-items-api';

export const server = setupServer(...TechItemsApiHandlers);
