const AWS = require('aws-sdk');

module.exports.getHandler = async (event) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    id: 1
  };

  const { domainName, stage, connectionId } = event.requestContext;
  const endpoint = `${domainName}/${stage}`;

  // Send result to web socket client.
  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint
  });

  await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(user) }).promise();

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { },
    body: JSON.stringify(user)
  };
};