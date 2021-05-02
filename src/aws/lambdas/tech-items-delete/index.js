const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TECH_ITEMS_TABLE = 'tech-items';

// eslint-disable-next-line no-unused-vars
const deleteTechItem = async (event, _context) => {
  const { id } = event.pathParameters;

  try {
    await dynamo
      .delete({
        TableName: TECH_ITEMS_TABLE,
        Key: { id },
      })
      .promise();
    return { statusCode: 204 };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};

exports.handler = deleteTechItem;
