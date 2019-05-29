import uuid from 'uuid'

export default async (dynamoDb, data) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      name: data.name,
      quantity: data.quantity,
      id: uuid.v1(),
      addedAt: Date.now()
    }
  }
  await dynamoDb.put(params).promise()
  return params.Item
}
