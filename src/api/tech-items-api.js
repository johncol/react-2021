const host = process.env.REACT_APP_TECH_ITEMS_API;

const listAll = async () => {
  const response = await fetch(`${host}/tech-items`);
  if (!response.ok) {
    return 'Items cound not be fetched. ' + response.message;
  }
  return (await response.json()).Items;
};

export const TechItemsApi = {
  listAll,
};
