const host = process.env.REACT_APP_TECH_ITEMS_API;

const listAll = async () => {
  const response = await fetch(`${host}/tech-items`);
  if (!response.ok) {
    throw new Error(`Items cound not be fetched. ${response.message}`);
  }
  return (await response.json()).Items;
};

const toggleTriedStatus = async (item) => {
  const { id, tried } = item;

  const response = await fetch(`${host}/tech-items/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ tried }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Item ${id} cound not be updated. ${response.message}`);
  }

  return await response.json();
};

const createItem = async (description) => {
  const response = await fetch(`${host}/tech-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });

  if (!response.ok) {
    throw new Error(`Error creating the item "${description}"`);
  }

  return await response.json();
};

export const TechItemsApi = {
  listAll,
  toggleTriedStatus,
  createItem,
};
