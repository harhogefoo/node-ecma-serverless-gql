import AWS from 'aws-sdk'
const dynamoDb = new AWS.DynamoDB.DocumentClient()

export default async id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id }
  }
  try {
    await dynamoDb.delete(params).promise()
    return true
  } catch (e) {
    throw Error(e)
  }
}
