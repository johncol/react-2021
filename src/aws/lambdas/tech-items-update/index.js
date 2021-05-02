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
const updateTechItem = async (event, _context) => {
  const { id } = event.pathParameters;
  const { tried } = JSON.parse(event.body);
  try {
    const { Attributes: item } = await dynamo
      .update({
        TableName: TECH_ITEMS_TABLE,
        Key: { id },
        UpdateExpression: 'set tried = :tried',
        ExpressionAttributeValues: {
          ':tried': tried,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise();
    return {
      ...baseResponse,
      body: JSON.stringify(item),
    };
  } catch (error) {
    return {
      ...baseResponse,
      body: error.message,
      statusCode: 500,
    };
  }
};

exports.handler = updateTechItem;
