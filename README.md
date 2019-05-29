# node-ecma-serverless-gql
serverless × GraphQL × DynamoDB

# setup
```
yarn
serverless dynamodb install
```

# local debugging
## prepare
```
serverless dynamodb start
```

## execute
```
serverless invoke local -f [function name]

e.g.
serverless invoke local -f qiita --path event.json
```


## execute dynamo shell
on http://localhost:8000

```
const params = {
  TableName: 'qiitaTable',
}
dynamodb.scan(params, (err, data) => {
  if (err) ppJson(err)
  else ppJson(data)
})
```

## finish
```
lsof -i :8000 -t | xargs kill
```


# deploy
```
serverless deploy
```

# remove
```
serverless remove
```

# GraphQL sample
## create
```
    mutation {
      createProduct (name: "Productine", quantity: 2) {
        id,
        name,
        quantity,
        addedAt
      }
    }
```

## view
```
    query {
      viewProduct (id: "<id>") {
        name,
        addedAt
      }
    }
```

## list
```
    query {
      listProducts {
        name,
        addedAt
      }
    }
```

## remove
```
    mutation {
      removeProduct (id: "<id>")
    }
```
