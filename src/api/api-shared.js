const HttpCode = {
  NO_CONTENT: 204,
};

const parseOrElse = async (response, error) => {
  if (!response.ok) {
    throw new Error(error);
  }

  if (response.status === HttpCode.NO_CONTENT) {
    return {};
  }

  return await response.json();
};

export const ApiShared = {
  parseOrElse,
};
