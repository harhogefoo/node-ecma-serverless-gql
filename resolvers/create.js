import uuid from 'uuid'

export default async (dynamoDb, data) => {
  const id = uuid.v1()
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      name: data.name || null,
      quantity: data.quantity,
      id: uuid.v1(),
      addedAt: Date.now()
    }
  }
  await dynamoDb.put(params).promise()
  return params.Item
}
