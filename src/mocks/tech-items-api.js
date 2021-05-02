import { rest } from 'msw';

const host = process.env.REACT_APP_TECH_ITEMS_API;

const listTechItems = (request, response, ctx) => {
  return response(
    ctx.status(200),
    ctx.json({
      Items: [
        {
          id: '1',
          priotity: 1,
          description: 'Test tech item: conquer the world',
          tried: false,
        },
      ],
    })
  );
};

const updateTechItem = (request, response, ctx) => {
  const { id } = request.params;
  const { tried } = request.body;
  return response(
    ctx.status(200),
    ctx.json({
      id,
      tried,
    })
  );
};

export const TechItemsApiHandlers = [
  rest.get(`${host}/tech-items`, listTechItems),
  rest.put(`${host}/tech-items/:id`, updateTechItem),
];
