import { graphql } from 'graphql'
import { getDynamoClient } from './db'
import schema from './schema'

export const queryProducts = (event, context, callback) => {
  const dynamoDb = getDynamoClient(event)
  graphql(schema(dynamoDb), event.body)
    .then(result => callback(null, { statusCode: 200, body: JSON.stringify(result) }))
    .catch(callback)
}
