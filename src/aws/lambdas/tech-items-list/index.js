const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TECH_ITEMS_TABLE = 'tech-items';

// eslint-disable-next-line no-unused-vars
const listTechItems = async (_event, _context) => {
  let response = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const rawResponse = await dynamo
      .scan({ TableName: TECH_ITEMS_TABLE })
      .promise();
    response.body = JSON.stringify(rawResponse);
    response.statusCode = 200;
  } catch (error) {
    response.body = error.message;
    response.statusCode = 400;
  }

  return response;
};

exports.handler = listTechItems;
