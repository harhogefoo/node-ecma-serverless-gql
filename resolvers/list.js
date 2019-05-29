export default async dynamoDb => {
  const result = await dynamoDb.scan({ TableName: process.env.TABLE_NAME }).promise()
  return result.Items
}
