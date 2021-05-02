const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TECH_ITEMS_TABLE = 'tech-items';

const baseResponse = {
  headers: {
    'Content-Type': 'application/json',
  },
  statusCode: 200,
};

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, _context) => {
  const { id } = event.pathParameters;
  try {
    const { Item } = await dynamo
      .get({
        TableName: TECH_ITEMS_TABLE,
        Key: { id },
      })
      .promise();
    if (!Item) {
      return {
        statusCode: 404,
      };
    }
    return {
      ...baseResponse,
      body: JSON.stringify(Item),
    };
  } catch (error) {
    return {
      ...baseResponse,
      body: error.message,
      statusCode: 500,
    };
  }
};
