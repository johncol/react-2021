import { ApiShared } from './api-shared';

const host = process.env.REACT_APP_TECH_ITEMS_API;

const listAll = async () => {
  const response = await fetch(`${host}/tech-items`);

  return await ApiShared.parseOrElse(
    response,
    `Items cound not be fetched. ${response.message}`
  );
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

  return await ApiShared.parseOrElse(
    response,
    `Item ${id} cound not be updated. ${response.message}`
  );
};

const createItem = async (description) => {
  const response = await fetch(`${host}/tech-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });

  return await ApiShared.parseOrElse(
    response,
    `Error creating the item "${description}"`
  );
};

const deleteItem = async (item) => {
  const response = await fetch(`${host}/tech-items/${item.id}`, {
    method: 'DELETE',
  });

  return await ApiShared.parseOrElse(
    response,
    `Error deleting the item "${item.description}"`
  );
};

export const TechItemsApi = {
  listAll,
  toggleTriedStatus,
  createItem,
  deleteItem,
};
