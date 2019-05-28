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

e.g. serverless invoke local -f qiita
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
