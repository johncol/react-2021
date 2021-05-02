const host = process.env.REACT_APP_TECH_ITEMS_API;

const listAll = async () => {
  const response = await fetch(`${host}/tech-items`);
  if (!response.ok) {
    return `Items cound not be fetched. ${response.message}`;
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
    return `Item ${id} cound not be updated. ${response.message}`;
  }

  return await response.json();
};

export const TechItemsApi = {
  listAll,
  toggleTriedStatus,
};
