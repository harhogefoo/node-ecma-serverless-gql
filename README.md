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
serverless involke local [function name]
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
