'use strict'

import AWS from 'aws-sdk'
import uuid from 'uuid'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export default async data => {
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
