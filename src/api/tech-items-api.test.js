import { TechItemsApi } from './tech-items-api';

describe('TechItemsApi', () => {
  it('should request the list of items with GET /tech-items', async () => {
    const { Items: items } = await TechItemsApi.listAll();

    expect(items).toBeDefined();
    expect(items).toHaveLength(1);

    const item = items[0];
    expect(item).toEqual({
      id: '1',
      priotity: 1,
      description: 'Test tech item: conquer the world',
      tried: false,
    });
  });

  it('should toggle an item tried status with PUT /tech-items/{id}', async () => {
    const item = {
      id: '1',
      description: 'Get a hobby',
      tried: true,
    };

    const updatedItem = await TechItemsApi.toggleTriedStatus(item);

    expect(updatedItem).toMatchObject({ id: '1', tried: true });
  });
});
