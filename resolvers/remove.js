export default async (dynamoDb, id) => {
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
