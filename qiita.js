import axios from 'axios'
import { getDynamoClient } from './db'


const putItem = (dynamoDb, params) => {
  return new Promise((resolve, reject) => {
    dynamoDb.put(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

export const hello = async (event, context, callback) => {
  const dynamoDb = getDynamoClient(event)

  const res = await axios({
    method: 'get',
    url: process.env.endpoint,
    params: {
      page: 1,
      per_page: 100
    }
  })

  if (res.data) {
    Promise.all(res.data.map(async element => {
      const params = {
        TableName: process.env.tableName,
        Item: {
          id: element.id,
          user_id: element.user.id,
          title: element.title,
          url: element.url,
          likes_count: element.likes_count,
          created_at: element.created_at,
          updated_at: element.updated_at,
          tags: element.tags
        }
      }
      await putItem(dynamoDb, params)
    }))
  }

  callback(null, {
    message: 'write qiita article data to DynamoDB success',
    event
  })
}
