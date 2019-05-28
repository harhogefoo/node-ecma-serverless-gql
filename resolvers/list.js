import AWS from 'aws-sdk'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export default async () => {
  const reuslt = await dynamoDb.scan({ TableName: process.env.TABLE_NAME }).promise()
  return reuslt.Items
}
