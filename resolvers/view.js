export default async (dynamoDb, id) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id }
  }
  const result = await dynamoDb.get(params).promise()
  return result.Item
}
