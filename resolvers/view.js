import AWS from 'aws-sdk'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export default async id => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id }
  }
  const result = await dynamoDb.get(params).promise()
  return result.Item
}
