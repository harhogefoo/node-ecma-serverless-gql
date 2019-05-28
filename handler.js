import { graphql } from 'graphql'
import schema from './schema'

export const queryProducts = async (event, context, callback) => {
  try {
    const result = await graphql(schema, event.body)
    callback(null, { statusCode: 200, body: JSON.stringify(result) })
  } catch (e) {
    callback(e)
  }
}
