const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TECH_ITEMS_TABLE = 'tech-items';

const baseResponse = {
  headers: {
    'Content-Type': 'application/json',
  },
  statusCode: 201,
};

const missingField = (field) => ({
  ...baseResponse,
  statusCode: 400,
  body: `Missing ${field} field`,
});

const emptyString = (field) => {
  return !field || String(field).trim().length === 0;
};

// eslint-disable-next-line no-unused-vars
const createTechItem = async (event, _context) => {
  const { description, priority } = JSON.parse(event.body);
  if (emptyString(description)) {
    return missingField('description');
  }

  const item = {
    id: String(Date.now()),
    description,
    priority,
    tried: false,
  };
  try {
    await dynamo
      .put({
        TableName: TECH_ITEMS_TABLE,
        Item: item,
      })
      .promise();
    return {
      ...baseResponse,
      body: JSON.stringify(item),
    };
  } catch (error) {
    return {
      body: error.message,
      statusCode: 500,
    };
  }
};

exports.handler = createTechItem;
